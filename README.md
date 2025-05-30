# Powder Coating Website with Contact Form System

This project includes a complete quote and contact form system with proxy email functionality, rate limiting, and spam protection.

## Features

- Server-side form validation using Zod
- Rate limiting with Upstash Redis
- reCAPTCHA integration for spam protection
- Proxy email functionality using Resend
- Responsive UI with shadcn/ui components

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

\`\`\`
# Redis for rate limiting (provided by Upstash integration)
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token

# Email service (Resend)
RESEND_API_KEY=your_resend_api_key
PROXY_EMAIL_FROM=noreply@yourdomain.com
PROXY_EMAIL_TO=your_real_email@example.com

# reCAPTCHA
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
\`\`\`

### 2. Email Service Setup

#### Using Resend (Recommended)

1. Sign up at [resend.com](https://resend.com)
2. Verify your domain
3. Create an API key
4. Add the API key to your environment variables

#### Using Mailgun

1. Sign up at [mailgun.com](https://mailgun.com)
2. Verify your domain
3. Get your API key from the dashboard
4. Replace the email service in `lib/email.ts` with Mailgun implementation:

\`\`\`typescript
import formData from 'form-data';
import Mailgun from 'mailgun.js';

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY || '',
});

export async function sendProxyEmail({ subject, content, formData }) {
  try {
    const result = await mg.messages.create(
      process.env.MAILGUN_DOMAIN || '',
      {
        from: process.env.PROXY_EMAIL_FROM,
        to: process.env.PROXY_EMAIL_TO,
        subject,
        html: `
          <h1>${subject}</h1>
          <p>${content}</p>
          <hr />
          <h2>Form Details:</h2>
          <ul>
            ${Object.entries(formData)
              .filter(([key]) => key !== 'recaptchaToken')
              .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
              .join('')}
          </ul>
        `,
        'h:Reply-To': formData.email,
      }
    );
    
    return { success: true, data: result };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, error };
  }
}
\`\`\`

#### Using Postmark

1. Sign up at [postmarkapp.com](https://postmarkapp.com)
2. Create a server and get your server token
3. Replace the email service in `lib/email.ts` with Postmark implementation:

\`\`\`typescript
import * as postmark from 'postmark';

const client = new postmark.ServerClient(process.env.POSTMARK_SERVER_TOKEN || '');

export async function sendProxyEmail({ subject, content, formData }) {
  try {
    const result = await client.sendEmail({
      From: process.env.PROXY_EMAIL_FROM || '',
      To: process.env.PROXY_EMAIL_TO || '',
      Subject: subject,
      HtmlBody: `
        <h1>${subject}</h1>
        <p>${content}</p>
        <hr />
        <h2>Form Details:</h2>
        <ul>
          ${Object.entries(formData)
            .filter(([key]) => key !== 'recaptchaToken')
            .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
            .join('')}
        </ul>
      `,
      ReplyTo: formData.email,
    });
    
    return { success: true, data: result };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, error };
  }
}
\`\`\`

### 3. reCAPTCHA Setup

1. Go to [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. Register a new site
3. Choose reCAPTCHA v2 Invisible
4. Add your domain
5. Get your site key and secret key
6. Add them to your environment variables

### 4. Deployment

#### Deploying to Vercel

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Add all environment variables in the Vercel dashboard
4. Deploy

#### Deploying to Render

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set the build command to `npm run build`
4. Set the start command to `npm start`
5. Add all environment variables
6. Deploy

## Development

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

3. Open [http://localhost:3000](http://localhost:3000) in your browser.
