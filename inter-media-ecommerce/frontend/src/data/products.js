// Shared product data for consistency across components
export const PRODUCTS_DATA = [
  // PRINTER & SCANNER
  {
    id: 1,
    name: 'HP LaserJet Pro M404n',
    description: 'Printer laser monokrom berkualitas tinggi untuk kebutuhan kantor',
    price: 2500000,
    originalPrice: 2800000,
    category: 'printers',
    brand: 'HP',
    condition: 'new',
    rating: 4.5,
    reviewCount: 28,
    stock: 15,
    seller: { name: 'Inter Medi-A Store', rating: 4.8, location: 'Jakarta' },
    features: ['Kecepatan 38 ppm', 'Resolusi 4800x600 dpi', 'Konektivitas USB & Ethernet'],
    createdAt: '2024-12-20',
    images: ['https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=400&fit=crop']
  },
  {
    id: 2,
    name: 'Canon Pixma G2010',
    description: 'Printer inkjet multifungsi dengan sistem tinta infus',
    price: 1200000,
    category: 'printers',
    brand: 'Canon',
    condition: 'new',
    rating: 4.3,
    reviewCount: 45,
    stock: 8,
    seller: { name: 'Inter Medi-A Store', rating: 4.8, location: 'Jakarta' },
    features: ['Print, Scan, Copy', 'Tinta Infus', 'Kualitas Foto Tinggi'],
    createdAt: '2024-12-18',
    images: ['https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=400&fit=crop']
  },

  // COMPUTERS & PC
  {
    id: 6,
    name: 'PC Desktop Intel Core i5',
    description: 'PC Desktop lengkap untuk kebutuhan kantor dan gaming ringan',
    price: 8500000,
    originalPrice: 9200000,
    category: 'computers',
    brand: 'Intel',
    condition: 'new',
    rating: 4.6,
    reviewCount: 34,
    stock: 12,
    seller: { name: 'Inter Medi-A Store', rating: 4.8, location: 'Jakarta' },
    features: ['Intel Core i5-12400', '16GB DDR4 RAM', '512GB NVMe SSD', 'GTX 1650'],
    createdAt: '2024-12-22',
    images: ['https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=400&fit=crop']
  },
  {
    id: 7,
    name: 'PC Gaming AMD Ryzen 5',
    description: 'PC Gaming performa tinggi dengan AMD Ryzen 5',
    price: 12500000,
    originalPrice: 13800000,
    category: 'computers',
    brand: 'AMD',
    condition: 'new',
    rating: 4.8,
    reviewCount: 89,
    stock: 8,
    seller: { name: 'Inter Medi-A Store', rating: 4.8, location: 'Jakarta' },
    features: ['AMD Ryzen 5 5600X', '32GB DDR4 RAM', '1TB NVMe SSD', 'RTX 3060'],
    createdAt: '2024-12-21',
    images: ['https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=400&fit=crop']
  },

  // LAPTOPS
  {
    id: 9,
    name: 'ASUS VivoBook 14',
    description: 'Laptop tipis dan ringan untuk produktivitas sehari-hari',
    price: 6500000,
    originalPrice: 7200000,
    category: 'laptops',
    brand: 'ASUS',
    condition: 'new',
    rating: 4.4,
    reviewCount: 67,
    stock: 5,
    seller: { name: 'Inter Medi-A Store', rating: 4.8, location: 'Jakarta' },
    features: ['Intel Core i5', '8GB RAM', '512GB SSD', 'Windows 11'],
    createdAt: '2024-12-10',
    images: ['https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop']
  },
  {
    id: 10,
    name: 'Lenovo ThinkPad E14',
    description: 'Laptop bisnis dengan keamanan tinggi dan performa handal',
    price: 8900000,
    originalPrice: 9500000,
    category: 'laptops',
    brand: 'Lenovo',
    condition: 'new',
    rating: 4.6,
    reviewCount: 45,
    stock: 7,
    seller: { name: 'Inter Medi-A Store', rating: 4.8, location: 'Jakarta' },
    features: ['Intel Core i7', '16GB RAM', '512GB SSD', 'Fingerprint'],
    createdAt: '2024-12-12',
    images: ['https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop']
  },

  // ACCESSORIES
  {
    id: 12,
    name: 'Logitech MX Master 3',
    description: 'Mouse wireless premium untuk produktivitas maksimal',
    price: 1200000,
    originalPrice: 1350000,
    category: 'accessories',
    brand: 'Logitech',
    condition: 'new',
    rating: 4.8,
    reviewCount: 156,
    stock: 25,
    seller: { name: 'Inter Medi-A Store', rating: 4.8, location: 'Jakarta' },
    features: ['Ergonomic Design', 'Multi-device', '70-day Battery'],
    createdAt: '2024-12-20',
    images: ['https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop']
  },

  // SERVICES
  {
    id: 15,
    name: 'Service Laptop Premium',
    description: 'Layanan service laptop lengkap dengan garansi',
    price: 250000,
    category: 'services',
    brand: 'Inter Medi-A',
    condition: 'service',
    rating: 4.9,
    reviewCount: 156,
    stock: 999,
    seller: { name: 'Inter Medi-A Store', rating: 4.8, location: 'Jakarta' },
    features: ['Diagnosa Gratis', 'Garansi 30 Hari', 'Teknisi Berpengalaman'],
    createdAt: '2024-12-15',
    images: ['https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop']
  }
];

// Get product by ID
export const getProductById = (id) => {
  return PRODUCTS_DATA.find(product => product.id === parseInt(id));
};

// Get products by category
export const getProductsByCategory = (category) => {
  if (category === 'all') return PRODUCTS_DATA;
  return PRODUCTS_DATA.filter(product => product.category === category);
};
