"use client"

import { useState } from "react"
import type { ContactFormData } from "@/lib/validation"

interface UseContactFormProps {
  onSuccess?: () => void
  onError?: (error: any) => void
}

export function useContactForm({ onSuccess, onError }: UseContactFormProps = {}) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [formSuccess, setFormSuccess] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState("")

  const handleRecaptchaVerify = (token: string) => {
    setRecaptchaToken(token)
  }

  const submitForm = async (formData: Omit<ContactFormData, "recaptchaToken">) => {
    try {
      setIsSubmitting(true)
      setFormErrors({})

      if (!recaptchaToken) {
        setFormErrors({ recaptcha: "reCAPTCHA verification is required" })
        return
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        if (data.errors) {
          setFormErrors(data.errors)
        } else {
          setFormErrors({ _form: data.message || "Something went wrong" })
        }
        onError?.(data)
        return
      }

      setFormSuccess(true)
      onSuccess?.()
    } catch (error) {
      console.error("Form submission error:", error)
      setFormErrors({ _form: "An unexpected error occurred" })
      onError?.(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    isSubmitting,
    formErrors,
    formSuccess,
    handleRecaptchaVerify,
    submitForm,
  }
}
