# Deployment Guide for Render

## Prerequisites
1. GitHub account
2. Render account (https://render.com)
3. Push your code to a GitHub repository

## Step-by-Step Deployment Instructions

### 1. Push Your Code to GitHub
```bash
git init
git add .
git commit -m "Initial commit - Portfolio website"
git branch -M main
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

### 2. Create a Render Account
1. Go to https://render.com
2. Sign up with your GitHub account
3. Grant Render access to your repositories

### 3. Create a New Web Service
1. Click "New +" → "Web Service"
2. Connect your GitHub repository
3. Configure the service:
   - **Name**: bharath-portfolio (or your preferred name)
   - **Region**: Choose closest to your users
   - **Branch**: main
   - **Root Directory**: Leave empty
   - **Runtime**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`

### 4. Set Environment Variables
In the Render dashboard, go to Environment section and add:
- `NODE_ENV`: `production`
- `PORT`: `10000` (Render will set this automatically)
- `SESSION_SECRET`: `your-secure-random-string-here`

### 5. Deploy
1. Click "Create Web Service"
2. Render will automatically start building and deploying your app
3. The build process will take 5-10 minutes

### 6. Access Your App
Once deployed, you'll get a URL like: `https://bharath-portfolio-xxxx.onrender.com`

## Important Notes

### Free Tier Limitations
- Apps go to sleep after 15 minutes of inactivity
- 750 hours per month (about 31 days)
- Apps wake up in 30-60 seconds when accessed

### Database Considerations
- Free tier includes 1GB of storage
- Database persists between deployments
- Automatic backups available on paid plans

### Custom Domain (Optional)
- Free custom domain support
- Add your domain in the Settings tab
- Update DNS records as instructed

## Troubleshooting

### Common Issues
1. **Build fails**: Check logs for missing dependencies
2. **App won't start**: Verify start command and port binding
3. **Database errors**: Check file permissions and paths

### Viewing Logs
1. Go to your service dashboard
2. Click "Logs" tab
3. Monitor real-time deployment and runtime logs

### Performance Optimization
1. Enable gzip compression
2. Optimize images and assets
3. Consider upgrading to paid plan for better performance

## Maintenance
- Automatic deployments on git push (if enabled)
- Monitor usage in Render dashboard
- Update dependencies regularly
- Check logs for errors

## Support
- Render documentation: https://render.com/docs
- Community support: https://community.render.com
