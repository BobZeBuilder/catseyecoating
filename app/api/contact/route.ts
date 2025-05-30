import { type NextRequest, NextResponse } from "next/server"
import { contactFormSchema } from "@/lib/validation"
import { rateLimit } from "@/lib/rate-limit"
import { verifyRecaptcha } from "@/lib/recaptcha"
import { sendProxyEmail } from "@/lib/email"

export async function POST(req: NextRequest) {
  try {
    // Check rate limit (5 submissions per hour)
    const rateLimitResult = await rateLimit(req, {
      limit: 5,
      timeWindow: 60 * 60, // 1 hour
    })

    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Rate limit exceeded. Please try again later.",
          remaining: rateLimitResult.remaining,
        },
        { status: 429 },
      )
    }

    // Parse and validate the request body
    const body = await req.json()
    const validationResult = contactFormSchema.safeParse(body)

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 },
      )
    }

    const data = validationResult.data

    // Verify reCAPTCHA
    const recaptchaValid = await verifyRecaptcha(data.recaptchaToken)

    if (!recaptchaValid) {
      return NextResponse.json({ success: false, message: "reCAPTCHA verification failed" }, { status: 400 })
    }

    // Send email
    const emailResult = await sendProxyEmail({
      subject: `New Quote Request: ${data.service}`,
      content: `${data.firstName} ${data.lastName} has requested a quote for ${data.service}.`,
      formData: data,
    })

    if (!emailResult.success) {
      return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ success: false, message: "An unexpected error occurred" }, { status: 500 })
  }
}
