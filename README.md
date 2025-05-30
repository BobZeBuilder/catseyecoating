# Powder Coating Website with Contact Form System

This project includes a complete quote and contact form system with proxy email functionality, rate limiting, and spam protection.

## Features

- Server-side form validation
- Rate limiting with Upstash Redis
- reCAPTCHA integration for spam protection
- Proxy email functionality using Resend
- Responsive UI with shadcn/ui components

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

\`\`\`
# Redis for rate limiting (provided by Upstash integration)
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

# Email service (Resend)
RESEND_API_KEY=
PROXY_EMAIL_FROM=
PROXY_EMAIL_TO=

# reCAPTCHA
RECAPTCHA_SECRET_KEY=
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=
\`\`\`

### 2. Email Service Setup

