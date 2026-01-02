#!/bin/bash

echo "🚀 Deploying Inter Medi-A Store to Vercel..."

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Navigate to project directory
cd "$(dirname "$0")"

# Build the project locally first (optional check)
echo "🔨 Building project locally..."
cd frontend
npm ci
npm run build
cd ..

# Deploy to Vercel with custom project name
echo "🌐 Deploying to Vercel as 'intermedia-store'..."
vercel --prod --name intermedia-store

echo "✅ Deployment complete!"
echo "🔗 Your site should be available at: https://intermedia-store.vercel.app"
