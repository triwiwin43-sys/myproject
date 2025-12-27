#!/bin/bash

echo "🚀 Vercel Deployment Status Check"
echo "=================================="

URL="https://frontend-kax5lrqe2-triwiwin43-sys-projects.vercel.app/products/6"

echo "📱 Testing mobile-responsive ProductDetail page..."
echo "URL: $URL"
echo ""

# Check if the site is accessible
echo "🔍 Checking site accessibility..."
if curl -s --head "$URL" | head -n 1 | grep -q "200 OK"; then
    echo "✅ Site is accessible"
else
    echo "⚠️  Site may be deploying or having issues"
fi

echo ""
echo "🎯 Expected Mobile Improvements:"
echo "✅ Responsive layout (1 col mobile, 2 col desktop)"
echo "✅ Touch-friendly buttons (44px minimum height)"
echo "✅ Improved image carousel navigation"
echo "✅ Better text sizing and spacing"
echo "✅ Product data auto-refresh every 30 seconds"
echo "✅ iOS zoom prevention on inputs"
echo "✅ Android compatibility optimizations"

echo ""
echo "📋 Manual Testing Checklist:"
echo "1. Open URL on Android device"
echo "2. Check if layout is responsive"
echo "3. Test touch interactions on buttons"
echo "4. Verify image carousel works"
echo "5. Check if product data loads correctly"
echo "6. Test quantity selector and add to cart"

echo ""
echo "⏱️  Vercel typically takes 1-3 minutes to deploy changes."
echo "🔄 If changes aren't visible, wait a few minutes and refresh."
echo ""
echo "🌐 Direct link: $URL"
