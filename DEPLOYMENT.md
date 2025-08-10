# AdFlix Deployment Configuration

## Environment Variables
PORT=3000
NODE_ENV=production

## Railway Deployment
- Platform: Railway
- Start Command: npm start
- Auto Deploy: Enabled

## Render Deployment  
- Platform: Render Web Service
- Build Command: npm install
- Start Command: npm start
- Environment: Node.js

## Docker Deployment
- Build: `docker build -t adflix .`
- Run: `docker run -p 3000:3000 adflix`
- Or use: `docker-compose up`

## Manual Deployment Steps
1. Clone repository
2. Run `npm install`
3. Run `npm start`
4. Access application at http://localhost:3000

## Required Files for Deployment:
- package.json (dependencies)
- server.js (main application)
- index.html (frontend)
- videos/ (video assets directory)

## Platform-Specific Notes:
- Railway: Uses railway.json for configuration
- Render: Uses render.yaml for configuration  
- Docker: Uses Dockerfile and docker-compose.yml
- All platforms: Require Node.js 18+ runtime