#!/bin/bash

echo "🚀 Starting Inter Medi-A E-Commerce Platform..."

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd backend && npm install && cd ..

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd frontend && npm install && cd ..

# Create uploads directory
echo "📁 Creating uploads directory..."
mkdir -p backend/uploads/{avatars,products,categories,reviews,misc}

echo "✅ Setup complete!"
echo ""
echo "🌐 Frontend: http://localhost:5173"
echo "🔧 Backend: http://localhost:3001"
echo "📚 API Health: http://localhost:3001/api/health"
echo ""
echo "Starting development servers..."

# Start both frontend and backend
npm run dev
