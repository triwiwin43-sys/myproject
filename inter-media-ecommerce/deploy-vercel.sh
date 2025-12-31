#!/bin/bash

echo "🚀 Deploying Inter Medi-A E-Commerce to Vercel..."

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

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!"
echo "🔗 Your site should be available at: https://myproject-triwiwin43-sys.vercel.app"
