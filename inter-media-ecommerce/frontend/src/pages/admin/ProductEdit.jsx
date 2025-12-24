import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiSave, FiArrowLeft, FiUpload, FiX, FiPlus } from 'react-icons/fi';
import ProductImage from '../../components/ProductImage';
import toast from 'react-hot-toast';

const AdminProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    originalPrice: 0,
    category: '',
    brand: '',
    stock: 0,
    status: 'active',
    condition: 'new',
    images: [],
    features: [],
    specifications: {},
    seller: { name: '', rating: 0, location: '' }
  });
  
  const [newFeature, setNewFeature] = useState('');
  const [newSpecKey, setNewSpecKey] = useState('');
  const [newSpecValue, setNewSpecValue] = useState('');

  useEffect(() => {
    // Load product data based on ID
    const loadProduct = () => {
      // Check if there's saved data in localStorage first
      const savedProduct = localStorage.getItem(`product_edit_${id}`);
      if (savedProduct) {
        setProduct(JSON.parse(savedProduct));
        return;
      }
      
      // Mock data - replace with API call
      const mockProduct = {
        id: parseInt(id),
        name: 'HP LaserJet Pro M404n',
        description: 'Printer laser monokrom berkualitas tinggi untuk kebutuhan kantor dengan kecepatan cetak hingga 38 halaman per menit.',
        price: 2500000,
        originalPrice: 2800000,
        category: 'printers',
        brand: 'HP',
        stock: 15,
        status: 'active',
        condition: 'new',
        images: ['/api/placeholder/400/400'],
        features: [
          'Kecepatan cetak hingga 38 ppm',
          'Resolusi cetak 4800 x 600 dpi',
          'Konektivitas USB dan Ethernet',
          'Kapasitas kertas 250 lembar'
        ],
        specifications: {
          'Print Speed': '38 ppm',
          'Print Resolution': '4800 x 600 dpi',
          'Paper Size': 'A4, Letter, Legal',
          'Connectivity': 'USB 2.0, Ethernet',
          'Memory': '256 MB'
        },
        seller: {
          name: 'Inter Medi-A Store',
          rating: 4.8,
          location: 'Jakarta'
        }
      };
      setProduct(mockProduct);
    };
    
    loadProduct();
  }, [id]);

  // Save to localStorage whenever product changes
  useEffect(() => {
    if (product.name) { // Only save if product is loaded
      localStorage.setItem(`product_edit_${id}`, JSON.stringify(product));
    }
  }, [product, id]);

  const handleSave = () => {
    if (!product.name || !product.price || !product.category) {
      toast.error('Please fill all required fields');
      return;
    }
    
    // Clear localStorage after successful save
    localStorage.removeItem(`product_edit_${id}`);
    toast.success('Product updated successfully');
    navigate('/admin/products');
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target.result;
        setProduct(prev => ({
          ...prev,
          images: [...prev.images, imageUrl]
        }));
      };
      reader.readAsDataURL(file);
    });
    
    toast.success(`${files.length} image(s) uploaded`);
  };

  const removeImage = (index) => {
    setProduct(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const addFeature = () => {
    if (newFeature.trim()) {
      setProduct(prev => ({
        ...prev,
        features: [...prev.features, newFeature.trim()]
      }));
      setNewFeature('');
    }
  };

  const removeFeature = (index) => {
    setProduct(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }));
  };

  const addSpecification = () => {
    if (newSpecKey.trim() && newSpecValue.trim()) {
      setProduct(prev => ({
        ...prev,
        specifications: {
          ...prev.specifications,
          [newSpecKey.trim()]: newSpecValue.trim()
        }
      }));
      setNewSpecKey('');
      setNewSpecValue('');
    }
  };

  const removeSpecification = (key) => {
    setProduct(prev => {
      const newSpecs = { ...prev.specifications };
      delete newSpecs[key];
      return { ...prev, specifications: newSpecs };
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate('/admin/products')}
            className="mr-4 p-2 text-gray-600 hover:text-gray-900"
          >
            <FiArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Edit Product</h1>
            <p className="text-gray-600">Product ID: {id}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="space-y-8">
            {/* Basic Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Name *
                  </label>
                  <input
                    type="text"
                    value={product.name}
                    onChange={(e) => setProduct({...product, name: e.target.value})}
                    className="input"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Brand *
                  </label>
                  <input
                    type="text"
                    value={product.brand}
                    onChange={(e) => setProduct({...product, brand: e.target.value})}
                    className="input"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    value={product.category}
                    onChange={(e) => setProduct({...product, category: e.target.value})}
                    className="input"
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="printers">Printers</option>
                    <option value="computers">Computers</option>
                    <option value="laptops">Laptops</option>
                    <option value="accessories">Accessories</option>
                    <option value="networking">Networking</option>
                    <option value="mobile">Mobile & Tablet</option>
                    <option value="camera">Camera</option>
                    <option value="office">Office Supplies</option>
                    <option value="services">Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Condition
                  </label>
                  <select
                    value={product.condition}
                    onChange={(e) => setProduct({...product, condition: e.target.value})}
                    className="input"
                  >
                    <option value="new">New</option>
                    <option value="used">Used</option>
                    <option value="refurbished">Refurbished</option>
                    <option value="service">Service</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price *
                  </label>
                  <input
                    type="number"
                    value={product.price}
                    onChange={(e) => setProduct({...product, price: parseInt(e.target.value)})}
                    className="input"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Original Price
                  </label>
                  <input
                    type="number"
                    value={product.originalPrice}
                    onChange={(e) => setProduct({...product, originalPrice: parseInt(e.target.value)})}
                    className="input"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Stock *
                  </label>
                  <input
                    type="number"
                    value={product.stock}
                    onChange={(e) => setProduct({...product, stock: parseInt(e.target.value)})}
                    className="input"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    value={product.status}
                    onChange={(e) => setProduct({...product, status: e.target.value})}
                    className="input"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  value={product.description}
                  onChange={(e) => setProduct({...product, description: e.target.value})}
                  rows={4}
                  className="input resize-none"
                  required
                />
              </div>
            </div>

            {/* Product Images */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Product Images</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                {product.images.map((image, index) => (
                  <div key={index} className="relative group">
                    <ProductImage
                      src={image}
                      alt={`Product ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg border"
                    />
                    <button
                      onClick={() => removeImage(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <FiX className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                
                <label className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors">
                  <FiUpload className="w-6 h-6 text-gray-400 mb-2" />
                  <span className="text-sm text-gray-500">Upload Image</span>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Features</h3>
              
              <div className="space-y-2 mb-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                    <span className="text-sm">{feature}</span>
                    <button
                      onClick={() => removeFeature(index)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <FiX className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newFeature}
                  onChange={(e) => setNewFeature(e.target.value)}
                  placeholder="Add new feature"
                  className="input flex-1"
                  onKeyPress={(e) => e.key === 'Enter' && addFeature()}
                />
                <button
                  onClick={addFeature}
                  className="btn btn-outline"
                >
                  <FiPlus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Specifications</h3>
              
              <div className="space-y-2 mb-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                    <div className="flex-1">
                      <span className="font-medium text-sm">{key}:</span>
                      <span className="text-sm ml-2">{value}</span>
                    </div>
                    <button
                      onClick={() => removeSpecification(key)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <FiX className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <input
                  type="text"
                  value={newSpecKey}
                  onChange={(e) => setNewSpecKey(e.target.value)}
                  placeholder="Specification name"
                  className="input"
                />
                <input
                  type="text"
                  value={newSpecValue}
                  onChange={(e) => setNewSpecValue(e.target.value)}
                  placeholder="Specification value"
                  className="input"
                  onKeyPress={(e) => e.key === 'Enter' && addSpecification()}
                />
                <button
                  onClick={addSpecification}
                  className="btn btn-outline"
                >
                  <FiPlus className="w-4 h-4 mr-2" />
                  Add Spec
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end space-x-4 pt-6 border-t">
            <button
              onClick={() => navigate('/admin/products')}
              className="btn btn-secondary"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="btn btn-primary"
            >
              <FiSave className="w-4 h-4 mr-2" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProductEdit;
