# itfactori Website

Official website for itfactori - Software Solutions Company.

Built with [Nuxt](https://nuxt.com) and [Nuxt UI](https://ui.nuxt.com).

## Setup

Make sure to install the dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Deployment to Netlify

This project is configured for deployment on Netlify. Follow these steps:

### 1. Push to GitHub

Make sure your code is pushed to a GitHub repository.

### 2. Connect to Netlify

1. Go to [Netlify](https://www.netlify.com/) and sign in
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub account and select your repository
4. Netlify will automatically detect the build settings from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `.output/public`
5. Click "Deploy site"

### 3. Connect Your GoDaddy Domain

1. In your Netlify site dashboard, go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Enter your domain name (e.g., `itfactori.com`)
4. Follow Netlify's instructions to update your DNS records in GoDaddy:
   - **Option A (Recommended)**: Use Netlify's nameservers
     - In GoDaddy, go to your domain's DNS settings
     - Replace the nameservers with Netlify's (provided in Netlify dashboard)
   - **Option B**: Use DNS records
     - Add an A record pointing to Netlify's IP (provided in Netlify dashboard)
     - Or add a CNAME record pointing to your Netlify site URL
5. Wait for DNS propagation (can take up to 48 hours, usually much faster)
6. Netlify will automatically provision an SSL certificate via Let's Encrypt

### 4. Environment Variables

The contact form requires a Resend API key to send emails:

1. Sign up for a free account at [Resend](https://resend.com)
2. Go to [API Keys](https://resend.com/api-keys) and create a new API key
3. In your Netlify site dashboard, go to **Site settings** → **Environment variables**
4. Add the following environment variable:
   - **Key**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (starts with `re_`)
5. Redeploy your site

**Note**: For production, you'll need to verify a domain with Resend to send emails from your own domain. Until then, emails will be sent from `onboarding@resend.dev`.

Your site will automatically deploy on every push to your main branch!
