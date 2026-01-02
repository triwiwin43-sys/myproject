import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  FiSave, 
  FiX, 
  FiUpload,
  FiImage,
  FiTrash2
} from 'react-icons/fi';
import ProductImage from '../../components/ProductImage';
import useProductStore from '../../context/productStore';
import toast from 'react-hot-toast';

const AddEditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { products, addProduct, updateProduct, getProductById } = useProductStore();
  const isEdit = Boolean(id);
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    stock: '',
    sku: '',
    weight: '',
    dimensions: '',
    warranty: '',
    brand: '',
    condition: 'new',
    status: 'active',
    images: [],
    specifications: [{ key: '', value: '' }],
    tags: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [imageFiles, setImageFiles] = useState([]);

  const categories = [
    'Printer',
    'Laptop',
    'PC & Desktop',
    'Monitor',
    'Aksesoris Komputer',
    'Storage & Memory',
    'Networking',
    'Service & Maintenance',
    'Software',
    'ATK & Office Supplies'
  ];

  useEffect(() => {
    if (isEdit && id) {
      const product = getProductById(parseInt(id));
      if (product) {
        setFormData({
          name: product.name || '',
          description: product.description || '',
          category: product.category || '',
          price: product.price?.toString() || '',
          stock: product.stock?.toString() || '',
          sku: product.sku || '',
          brand: product.brand || '',
          condition: product.condition || 'new',
          originalPrice: product.originalPrice?.toString() || '',
          discount: product.discount?.toString() || '',
          minimumStock: product.minimumStock?.toString() || '',
          weight: product.weight?.toString() || '',
          dimensions: product.dimensions || '',
          warranty: product.warranty || '',
          image: product.image || '',
          images: product.images || [],
          features: product.features || [],
          specifications: product.specifications || {},
          metaTitle: product.metaTitle || '',
          metaDescription: product.metaDescription || '',
          keywords: product.keywords || []
        });
      }
    }
  }, [id, isEdit, getProductById]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSpecificationChange = (index, field, value) => {
    const newSpecs = [...formData.specifications];
    newSpecs[index][field] = value;
    setFormData(prev => ({
      ...prev,
      specifications: newSpecs
    }));
  };

  const addSpecification = () => {
    setFormData(prev => ({
      ...prev,
      specifications: [...prev.specifications, { key: '', value: '' }]
    }));
  };

  const removeSpecification = (index) => {
    const newSpecs = formData.specifications.filter((_, i) => i !== index);
    setFormData(prev => ({
      ...prev,
      specifications: newSpecs
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImageFiles(prev => [...prev, ...files]);
    
    // Create preview URLs and update form data
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        setFormData(prev => ({
          ...prev,
          images: [...prev.images, imageUrl],
          image: prev.images.length === 0 ? imageUrl : prev.image // Set as main image if first
        }));
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
    setImageFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validate required fields
      if (!formData.name || !formData.category || !formData.price) {
        toast.error('Mohon lengkapi field yang wajib diisi');
        return;
      }

      // Prepare product data
      const productData = {
        ...formData,
        price: parseFloat(formData.price),
        originalPrice: parseFloat(formData.originalPrice) || parseFloat(formData.price),
        stock: parseInt(formData.stock) || 0,
        minimumStock: parseInt(formData.minimumStock) || 0,
        discount: parseFloat(formData.discount) || 0,
        status: 'active',
        sellerId: 1, // Mock seller ID
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (isEdit) {
        updateProduct(parseInt(id), productData);
      } else {
        addProduct(productData);
      }
      
      toast.success(`Produk berhasil ${isEdit ? 'diperbarui' : 'ditambahkan'}`);
      navigate('/seller/products');
    } catch (error) {
      toast.error(`Gagal ${isEdit ? 'memperbarui' : 'menambahkan'} produk`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {isEdit ? 'Edit Produk' : 'Tambah Produk Baru'}
              </h1>
              <p className="text-gray-600">
                {isEdit ? 'Perbarui informasi produk' : 'Tambahkan produk baru ke toko Anda'}
              </p>
            </div>
            <button
              onClick={() => navigate('/seller/products')}
              className="btn btn-outline"
            >
              <FiX className="w-5 h-5 mr-2" />
              Batal
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Informasi Dasar</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Produk *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="input"
                  placeholder="Masukkan nama produk"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kategori *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="input"
                >
                  <option value="">Pilih kategori</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Brand/Merek
                </label>
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleInputChange}
                  className="input"
                  placeholder="Merek produk"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Harga *
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                  className="input"
                  placeholder="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Stok
                </label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleInputChange}
                  className="input"
                  placeholder="Jumlah stok"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  SKU
                </label>
                <input
                  type="text"
                  name="sku"
                  value={formData.sku}
                  onChange={handleInputChange}
                  className="input"
                  placeholder="Kode produk"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kondisi
                </label>
                <select
                  name="condition"
                  value={formData.condition}
                  onChange={handleInputChange}
                  className="input"
                >
                  <option value="new">Baru</option>
                  <option value="used">Bekas</option>
                  <option value="refurbished">Refurbished</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Deskripsi Produk
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="input resize-none"
                  placeholder="Jelaskan detail produk, fitur, dan keunggulan..."
                />
              </div>
            </div>
          </div>

          {/* Product Images */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Foto Produk</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {formData.images.map((image, index) => (
                <div key={index} className="relative">
                  <ProductImage
                    src={image}
                    alt={`Product ${index + 1}`}
                    category={formData.category}
                    className="w-full h-32 object-cover rounded-lg border"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 p-1 bg-red-600 text-white rounded-full hover:bg-red-700"
                  >
                    <FiTrash2 className="w-3 h-3" />
                  </button>
                </div>
              ))}
              
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <FiUpload className="w-8 h-8 mb-2 text-gray-400" />
                  <p className="text-xs text-gray-500">Upload foto</p>
                </div>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>
            
            <p className="text-sm text-gray-500">
              Upload maksimal 8 foto. Format: JPG, PNG. Ukuran maksimal 2MB per foto.
            </p>
          </div>

          {/* Specifications */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Spesifikasi</h2>
              <button
                type="button"
                onClick={addSpecification}
                className="btn btn-outline btn-sm"
              >
                Tambah Spesifikasi
              </button>
            </div>
            
            <div className="space-y-4">
              {formData.specifications.map((spec, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={spec.key}
                    onChange={(e) => handleSpecificationChange(index, 'key', e.target.value)}
                    placeholder="Nama spesifikasi"
                    className="input"
                  />
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={spec.value}
                      onChange={(e) => handleSpecificationChange(index, 'value', e.target.value)}
                      placeholder="Nilai spesifikasi"
                      className="input flex-1"
                    />
                    <button
                      type="button"
                      onClick={() => removeSpecification(index)}
                      className="p-2 text-red-600 hover:bg-red-100 rounded-lg"
                    >
                      <FiTrash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Informasi Tambahan</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Berat (kg)
                </label>
                <input
                  type="number"
                  step="0.1"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  className="input"
                  placeholder="0.0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dimensi (P x L x T cm)
                </label>
                <input
                  type="text"
                  name="dimensions"
                  value={formData.dimensions}
                  onChange={handleInputChange}
                  className="input"
                  placeholder="30 x 20 x 15"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Garansi
                </label>
                <input
                  type="text"
                  name="warranty"
                  value={formData.warranty}
                  onChange={handleInputChange}
                  className="input"
                  placeholder="12 bulan"
                />
              </div>

              <div className="md:col-span-3">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags (pisahkan dengan koma)
                </label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  className="input"
                  placeholder="printer, laser, hp, kantor"
                />
              </div>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate('/seller/products')}
              className="btn btn-outline"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary"
            >
              {loading ? (
                'Menyimpan...'
              ) : (
                <>
                  <FiSave className="w-5 h-5 mr-2" />
                  {isEdit ? 'Perbarui Produk' : 'Simpan Produk'}
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEditProduct;
