import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

type SendEmailParams = {
  subject: string
  content: string
  formData: Record<string, any>
}

export async function sendProxyEmail({ subject, content, formData }: SendEmailParams) {
  try {
    const fromEmail = process.env.PROXY_EMAIL_FROM
    const toEmail = process.env.PROXY_EMAIL_TO

    if (!fromEmail || !toEmail) {
      throw new Error("Email configuration is missing")
    }

    // Create a formatted HTML email with the form data
    const htmlContent = `
      <h1>${subject}</h1>
      <p>${content}</p>
      <hr />
      <h2>Form Details:</h2>
      <ul>
        ${Object.entries(formData)
          .filter(([key]) => key !== "recaptchaToken")
          .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
          .join("")}
      </ul>
    `

    const result = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject,
      html: htmlContent,
      reply_to: formData.email,
    })

    return { success: true, data: result }
  } catch (error) {
    console.error("Email sending error:", error)
    return { success: false, error }
  }
}
