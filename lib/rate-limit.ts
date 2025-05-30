import { Redis } from "@upstash/redis"
import type { NextRequest } from "next/server"

type Options = {
  limit?: number
  timeWindow?: number // in seconds
  identifierFn?: (req: NextRequest) => string
}

export async function rateLimit(req: NextRequest, options: Options = {}) {
  const {
    limit = 5, // 5 requests
    timeWindow = 60 * 60, // per hour
    identifierFn = (req) => req.ip || "127.0.0.1",
  } = options

  const identifier = identifierFn(req)
  const redis = Redis.fromEnv()

  const key = `rate-limit:${identifier}`

  let count: number

  try {
    // Increment the counter for this IP
    count = await redis.incr(key)

    // If this is the first request, set an expiration
    if (count === 1) {
      await redis.expire(key, timeWindow)
    }
  } catch (error) {
    console.error("Rate limiting error:", error)
    // If Redis fails, allow the request to proceed
    return { success: true, limit, remaining: 999 }
  }

  const remaining = Math.max(0, limit - count)
  const success = count <= limit

  return { success, limit, remaining }
}
