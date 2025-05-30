"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { ReCaptcha } from "@/components/recaptcha"
import { useContactForm } from "@/hooks/use-contact-form"

const SERVICES = ["Automotive Coating", "Industrial Coating", "Architectural Coating", "Custom Project"]

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const { isSubmitting, formErrors, formSuccess, handleRecaptchaVerify, submitForm } = useContactForm()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await submitForm(formData)
  }

  if (formSuccess) {
    return (
      <Card>
        <CardContent className="pt-6">
          <Alert className="bg-green-50 border-green-200">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <AlertTitle className="text-green-800">Thank you for your message!</AlertTitle>
            <AlertDescription className="text-green-700">
              We've received your request and will get back to you within 2 business hours.
            </AlertDescription>
          </Alert>
          <Button className="w-full mt-6" variant="outline" onClick={() => window.location.reload()}>
            Submit another request
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Get Your Free Quote</CardTitle>
        <CardDescription>Fill out the form below and we'll get back to you within 2 hours</CardDescription>
      </CardHeader>
      <CardContent>
        {formErrors._form && (
          <Alert className="mb-6 bg-red-50 border-red-200">
            <AlertCircle className="h-5 w-5 text-red-600" />
            <AlertTitle className="text-red-800">Error</AlertTitle>
            <AlertDescription className="text-red-700">{formErrors._form}</AlertDescription>
          </Alert>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                className={formErrors.firstName ? "border-red-500" : ""}
              />
              {formErrors.firstName && <p className="text-red-500 text-sm mt-1">{formErrors.firstName}</p>}
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className={formErrors.lastName ? "border-red-500" : ""}
              />
              {formErrors.lastName && <p className="text-red-500 text-sm mt-1">{formErrors.lastName}</p>}
            </div>
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className={formErrors.email ? "border-red-500" : ""}
            />
            {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(555) 123-4567"
              className={formErrors.phone ? "border-red-500" : ""}
            />
            {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
          </div>
          <div>
            <Label htmlFor="service">Service Needed</Label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`w-full p-2 border ${formErrors.service ? "border-red-500" : "border-input"} rounded-md`}
            >
              <option value="">Select a service</option>
              {SERVICES.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {formErrors.service && <p className="text-red-500 text-sm mt-1">{formErrors.service}</p>}
          </div>
          <div>
            <Label htmlFor="message">Project Details</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project, including size, quantity, and timeline..."
              rows={4}
              className={formErrors.message ? "border-red-500" : ""}
            />
            {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
          </div>

          <ReCaptcha onVerify={handleRecaptchaVerify} />
          {formErrors.recaptchaToken && <p className="text-red-500 text-sm">{formErrors.recaptchaToken}</p>}

          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Get Free Quote"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
