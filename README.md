# Vintage Strength Studio

## Deployment Guide

### Prerequisites

- Node.js 18 or higher
- A Neon Database account
- A deployment platform account (Railway, Render, or Fly.io)

### Environment Variables

Create a `.env` file with:

```
DATABASE_URL="your_neon_database_connection_string"
NODE_ENV="production"
```

### Deployment Steps

1. **Prepare the Application**

   ```bash
   npm install
   npm run build
   ```

2. **Choose a Deployment Platform**

   #### Railway

   - Create a new project
   - Connect your GitHub repository
   - Add environment variables
   - Deploy

   #### Render

   - Create a new Web Service
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set start command: `npm start`
   - Add environment variables
   - Deploy

   #### Fly.io

   - Install Fly CLI
   - Run `fly launch`
   - Set environment variables
   - Deploy with `fly deploy`

### Post-Deployment

- Verify the application is running
- Check database connections
- Monitor logs for any issues

### Maintenance

- Regular database backups
- Monitor application performance
- Keep dependencies updated
