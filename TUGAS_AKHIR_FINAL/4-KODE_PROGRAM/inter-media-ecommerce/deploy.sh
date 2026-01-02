#!/bin/bash

# Production Deployment Script for Inter Medi-A E-Commerce
echo "🚀 Starting deployment process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root."
    exit 1
fi

print_status "Checking environment..."

# Check Node.js version
NODE_VERSION=$(node --version)
print_status "Node.js version: $NODE_VERSION"

# Check if .env.production exists
if [ ! -f "frontend/.env.production" ]; then
    print_warning ".env.production not found. Creating from template..."
    cp frontend/.env.development frontend/.env.production
    print_warning "Please update frontend/.env.production with production values"
fi

# Install dependencies
print_status "Installing dependencies..."
cd frontend
npm ci --production=false

# Run linting
print_status "Running linter..."
npm run lint

# Build the application
print_status "Building application for production..."
npm run build

if [ $? -eq 0 ]; then
    print_status "Build completed successfully!"
else
    print_error "Build failed!"
    exit 1
fi

# Check build size
BUILD_SIZE=$(du -sh dist | cut -f1)
print_status "Build size: $BUILD_SIZE"

# Generate deployment info
cat > dist/deployment-info.json << EOF
{
  "deployedAt": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")",
  "version": "$(node -p "require('./package.json').version")",
  "buildSize": "$BUILD_SIZE",
  "nodeVersion": "$NODE_VERSION",
  "environment": "production"
}
EOF

print_status "Deployment info generated"

# Optional: Deploy to hosting service
if [ "$1" = "--deploy" ]; then
    print_status "Deploying to hosting service..."
    
    # Vercel deployment
    if command -v vercel &> /dev/null; then
        print_status "Deploying to Vercel..."
        vercel --prod
    else
        print_warning "Vercel CLI not found. Install with: npm i -g vercel"
    fi
    
    # Netlify deployment
    if command -v netlify &> /dev/null; then
        print_status "Deploying to Netlify..."
        netlify deploy --prod --dir=dist
    fi
fi

print_status "Deployment process completed! 🎉"
print_status "Build files are in: frontend/dist/"

# Return to project root
cd ..

echo ""
echo "📋 Next steps:"
echo "1. Upload the 'frontend/dist' folder to your hosting service"
echo "2. Configure your web server to serve the files"
echo "3. Set up SSL certificate"
echo "4. Configure domain and DNS"
echo ""
echo "🔗 Useful commands:"
echo "  - Preview build: cd frontend && npm run preview"
echo "  - Deploy to Vercel: ./deploy.sh --deploy"
echo ""
