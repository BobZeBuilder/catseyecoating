"use client"

import { useEffect, useRef } from "react"
import Script from "next/script"

interface ReCaptchaProps {
  onVerify: (token: string) => void
}

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
      render: (id: string, options: any) => number
    }
    onReCaptchaLoad: () => void
  }
}

export function ReCaptcha({ onVerify }: ReCaptchaProps) {
  const captchaRef = useRef<HTMLDivElement>(null)
  const widgetId = useRef<number | null>(null)

  useEffect(() => {
    // Define the callback function for when reCAPTCHA script loads
    window.onReCaptchaLoad = () => {
      if (captchaRef.current) {
        widgetId.current = window.grecaptcha.render(captchaRef.current, {
          sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
          size: "invisible",
          callback: onVerify,
        })
      }
    }

    return () => {
      // Clean up
      delete window.onReCaptchaLoad
    }
  }, [onVerify])

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?onload=onReCaptchaLoad&render=explicit`}
        strategy="lazyOnload"
      />
      <div ref={captchaRef} />
    </>
  )
}
