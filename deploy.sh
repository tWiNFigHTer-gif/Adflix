#!/bin/bash

# AdFlix Deployment Script
# This script helps deploy AdFlix to various platforms

echo "🎬 AdFlix Deployment Script"
echo "=========================="

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Test local setup
echo "📋 Testing local setup..."
if [ -f "package.json" ] && [ -f "server.js" ]; then
    echo "✅ Required files found"
else
    echo "❌ Missing required files (package.json, server.js)"
    exit 1
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Run local test
echo "🧪 Testing local server..."
npm run test

if [ $? -eq 0 ]; then
    echo "✅ Local test passed"
else
    echo "❌ Local test failed"
    exit 1
fi

echo ""
echo "🚀 Deployment Options:"
echo "1. Railway - https://railway.app"
echo "2. Render - https://render.com"  
echo "3. Docker - Local containerization"
echo "4. Manual - Local development server"

echo ""
echo "📝 Deploy Instructions:"
echo "Railway: Connect your GitHub repo at https://railway.app"
echo "Render: Connect your GitHub repo at https://render.com"
echo "Docker: Run 'npm run docker:build' then 'npm run docker:run'"
echo "Manual: Run 'npm start' for local development"

echo ""
echo "🌐 Once deployed, your AdFlix app will be available at:"
echo "- Railway: https://[your-app-name].up.railway.app"
echo "- Render: https://[your-app-name].onrender.com"
echo "- Local: http://localhost:3000"

echo ""
echo "✨ AdFlix deployment ready! Happy advertising! 🎯"