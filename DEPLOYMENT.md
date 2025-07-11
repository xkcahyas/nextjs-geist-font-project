# Deployment Guide for Custom Domain Setup

This guide will help you deploy your tracking application with the custom domain `lyche.premium.app`.

## Prerequisites

- GitHub account
- Domain name or access to a free subdomain service
- Basic understanding of DNS configuration

## Step 1: Prepare Your Code

Your application is now configured to use:
- Custom domain: `lyche.premium.app`
- Tracking path: `/home/[trackingId]`
- Results path: `/home/[trackingId]/results`

## Step 2: Deploy to Vercel (Recommended)

### 2.1 Push to GitHub

1. Initialize git repository (if not already done):
```bash
git init
git add .
git commit -m "Initial commit with custom domain configuration"
```

2. Create a new repository on GitHub and push your code:
```bash
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

### 2.2 Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project"
3. Import your GitHub repository
4. Configure environment variables:
   - `NEXT_PUBLIC_CUSTOM_DOMAIN` = `lyche.premium.app`
   - `NEXT_PUBLIC_TRACKING_PATH` = `home`
5. Deploy the project

### 2.3 Configure Custom Domain

1. In Vercel dashboard, go to your project settings
2. Navigate to "Domains" section
3. Add your custom domain: `lyche.premium.app`
4. Follow Vercel's DNS configuration instructions

## Step 3: Alternative - Deploy to Netlify

### 3.1 Build Configuration

Create `netlify.toml` in your project root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NEXT_PUBLIC_CUSTOM_DOMAIN = "lyche.premium.app"
  NEXT_PUBLIC_TRACKING_PATH = "home"

[[redirects]]
  from = "/track/*"
  to = "/home/:splat"
  status = 301

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3.2 Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign up/login
3. Click "New site from Git"
4. Connect your GitHub repository
5. Configure build settings and environment variables
6. Deploy the site
7. Configure custom domain in Netlify dashboard

## Step 4: DNS Configuration

### For Custom Domain (lyche.premium.app)

If you own the domain, configure DNS:

1. **A Record**: Point `lyche.premium.app` to your hosting provider's IP
2. **CNAME Record**: Point `www.lyche.premium.app` to `lyche.premium.app`

### For Free Subdomain Services

If using a free service:

1. **Vercel**: Use `yourproject.vercel.app` and configure custom domain
2. **Netlify**: Use `yourproject.netlify.app` and configure custom domain
3. **Railway**: Use `yourproject.railway.app`

## Step 5: SSL Certificate

Most hosting providers (Vercel, Netlify) automatically provide SSL certificates. Ensure HTTPS is enabled.

## Step 6: Testing

1. Test the homepage: `https://lyche.premium.app`
2. Create a test tracking link
3. Verify the generated link uses the correct domain and path structure
4. Test the tracking functionality
5. Check the results page

## Step 7: Environment Variables Summary

Make sure these environment variables are set in your hosting platform:

```env
NEXT_PUBLIC_CUSTOM_DOMAIN=lyche.premium.app
NEXT_PUBLIC_TRACKING_PATH=home
```

## Troubleshooting

### Common Issues

1. **Domain not resolving**: Check DNS propagation (can take up to 48 hours)
2. **SSL certificate issues**: Wait for automatic provisioning or contact support
3. **Environment variables not working**: Ensure they're set in the hosting platform, not just locally
4. **Tracking links not working**: Verify the path structure and API endpoints

### Verification Steps

1. Check DNS propagation: Use tools like `dig` or online DNS checkers
2. Test API endpoints: `https://lyche.premium.app/api/track/create`
3. Verify environment variables are loaded in the browser console
4. Check browser developer tools for any JavaScript errors

## Security Considerations

1. **HTTPS Only**: Ensure all traffic uses HTTPS
2. **CORS Configuration**: Configure CORS if needed for API access
3. **Rate Limiting**: Consider implementing rate limiting for API endpoints
4. **Data Privacy**: Ensure compliance with privacy laws (GDPR, CCPA)

## Monitoring

1. Set up monitoring for uptime
2. Monitor API response times
3. Track error rates
4. Monitor storage usage (if using persistent storage)

---

Your tracking application should now be accessible at `https://lyche.premium.app` with tracking links in the format `https://lyche.premium.app/home/[trackingId]`.
