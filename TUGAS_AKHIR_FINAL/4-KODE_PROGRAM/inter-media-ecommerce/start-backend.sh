#!/bin/bash

echo "🚀 Starting Inter Medi-A Backend..."

# Kill any existing backend process
pkill -f "nodemon server.js" 2>/dev/null || true
pkill -f "node server.js" 2>/dev/null || true

# Wait a moment
sleep 2

# Start backend
cd /workspaces/myproject/inter-media-ecommerce/backend
npm run dev > backend.log 2>&1 &

# Wait for backend to start
sleep 5

# Test if backend is running
if curl -s http://localhost:5000/api/health > /dev/null; then
    echo "✅ Backend is running on http://localhost:5000"
    echo "📚 API Health: http://localhost:5000/api/health"
    echo "📁 Upload endpoint: http://localhost:5000/api/upload"
else
    echo "❌ Backend failed to start"
    echo "Check backend.log for errors:"
    tail -10 backend.log
fi
