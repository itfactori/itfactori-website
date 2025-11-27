# Nuxt Portfolio Template

[![Nuxt UI](https://img.shields.io/badge/Made%20with-Nuxt%20UI-00DC82?logo=nuxt&labelColor=020420)](https://ui.nuxt.com)

Use this template to create your own portfolio with [Nuxt UI](https://ui.nuxt.com).

- [Live demo](https://portfolio-template.nuxt.dev/)
- [Documentation](https://ui.nuxt.com/getting-started/installation)

<a href="https://portfolio-template.nuxt.dev/" target="_blank">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://ui.nuxt.com/assets/templates/nuxt/portfolio-dark.png">
    <source media="(prefers-color-scheme: light)" srcset="https://ui.nuxt.com/assets/templates/nuxt/portfolio-light.png">
    <img alt="Nuxt Portfolio Template" src="https://ui.nuxt.com/assets/templates/nuxt/portfolio-dark.png">
  </picture>
</a>

## Quick Start

```bash [Terminal]
npm create nuxt@latest -- -t github:nuxt-ui-templates/portfolio
```

## Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-name=portfolio&repository-url=https%3A%2F%2Fgithub.com%2Fnuxt-ui-templates%2Fportfolio&demo-image=https%3A%2F%2Fui.nuxt.com%2Fassets%2Ftemplates%2Fnuxt%2Fportfolio-dark.png&demo-url=https%3A%2F%2Fportfolio-template.nuxt.dev%2F&demo-title=Nuxt%20Portfolio%20Template&demo-description=A%20sleek%20portfolio%20template%20to%20showcase%20your%20work%2C%20skills%20and%20blog%20powered%20by%20Nuxt%20Content.)

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
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
   - Build command: `pnpm build`
   - Publish directory: `.output/public`
5. Click "Deploy site"

### 3. Connect Your GoDaddy Domain
1. In your Netlify site dashboard, go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Enter your domain name (e.g., `yourdomain.com`)
4. Follow Netlify's instructions to update your DNS records in GoDaddy:
   - **Option A (Recommended)**: Use Netlify's nameservers
     - In GoDaddy, go to your domain's DNS settings
     - Replace the nameservers with Netlify's (provided in Netlify dashboard)
   - **Option B**: Use DNS records
     - Add an A record pointing to Netlify's IP (provided in Netlify dashboard)
     - Or add a CNAME record pointing to your Netlify site URL
5. Wait for DNS propagation (can take up to 48 hours, usually much faster)
6. Netlify will automatically provision an SSL certificate via Let's Encrypt

### 4. Environment Variables (if needed)
If your app requires environment variables:
1. Go to **Site settings** → **Environment variables**
2. Add any required variables
3. Redeploy your site

Your site will automatically deploy on every push to your main branch!

## Renovate integration

Install [Renovate GitHub app](https://github.com/apps/renovate/installations/select_target) on your repository and you are good to go.
