# AdFlix Deployment URLs

## 🎯 Live Application URLs

### Primary Deployments

1. **Railway Deployment**: 
   - URL: [Deploy to Railway](https://railway.app/new/template/railway.json?referralCode=AdFlix)
   - Configuration: Uses `railway.json`
   - Platform: Railway
   - Status: Ready to Deploy ✅

2. **Render Deployment**: 
   - URL: [Deploy to Render](https://render.com/deploy?repo=https://github.com/tWiNFigHTer-gif/Adflix)
   - Configuration: Uses `render.yaml`
   - Platform: Render
   - Status: Ready to Deploy ✅

### Alternative Deployment Options

3. **Vercel Deployment**:
   - Configuration: Uses `vercel.json`
   - Run: `npx vercel --prod`
   - Platform: Vercel

4. **Google Cloud Platform**:
   - Configuration: Uses `app.yaml`
   - Run: `gcloud app deploy`
   - Platform: Google App Engine

5. **Docker Hub**: 
   - Image: `adflix:latest`
   - Run with: `docker run -p 3000:3000 adflix:latest`
   - Local build: `npm run docker:build && npm run docker:run`

6. **Local Development**:
   - URL: http://localhost:3000
   - Run with: `npm start`

## 🚀 One-Click Deploy

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/railway.json?referralCode=AdFlix)
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/tWiNFigHTer-gif/Adflix)

## 🚀 Quick Deploy Instructions

### Railway (Recommended)
1. Go to [Railway](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Connect your GitHub account and select the Adflix repository
4. Railway will automatically detect the `railway.json` configuration
5. Your app will be deployed and accessible via the generated URL

### Render
1. Go to [Render](https://render.com)
2. Click "New" → "Web Service"
3. Connect your GitHub account and select the Adflix repository
4. Render will automatically detect the `render.yaml` configuration
5. Your app will be deployed and accessible via the generated URL

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel --prod
```

### Google Cloud Platform
```bash
# Install Google Cloud SDK, then:
gcloud app deploy
```
```bash
# Build and run locally
npm run docker:build
npm run docker:run

# Or use docker-compose
docker-compose up --build
```

### Manual Deployment
```bash
# Clone repository
git clone https://github.com/tWiNFigHTer-gif/Adflix.git
cd Adflix

# Install dependencies
npm install

# Start server
npm start

# Access at http://localhost:3000
```

## 🌟 Deployment Features

- ✅ Full-stack Node.js application
- ✅ Express.js backend API
- ✅ Responsive frontend UI
- ✅ Video streaming functionality
- ✅ AI smile detection with face-api.js
- ✅ Gamification system (AdCoins)
- ✅ Production-ready deployment
- ✅ Health checks and monitoring
- ✅ Docker containerization
- ✅ Cross-platform compatibility
- ✅ Zero-config deployment

## 📋 Technical Specifications

- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **AI/ML**: face-api.js for smile detection
- **Dependencies**: cors, express, morgan
- **Port**: 3000 (configurable via PORT env var)
- **Memory**: ~50MB RAM usage
- **Storage**: Minimal (videos served statically)

## 🔧 Environment Variables

```bash
# Optional - defaults provided
PORT=3000                # Server port (default: 3000)
NODE_ENV=production      # Environment mode
```

## 📚 Post-Deployment Checklist

- [ ] Verify the application loads at the deployed URL
- [ ] Test the smile detection feature (requires HTTPS for webcam access)
- [ ] Check that video ads play correctly
- [ ] Verify the AdCoin system works
- [ ] Test responsive design on mobile devices
- [ ] Monitor application logs for any errors

## 🆘 Troubleshooting

**Common Issues:**
- **Webcam not working**: Ensure the site is served over HTTPS (required for webcam access)
- **Videos not loading**: Check if video files exist in the `/videos` directory
- **App not starting**: Verify Node.js version is 18+ and dependencies are installed

**Support:**
- Check application logs via your platform's dashboard
- Use the `/debug` endpoint to verify server status
- Review the GitHub repository for updates

---

**🎬 Start watching ads that nobody asked for!** 🎯