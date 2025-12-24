// Admin Product Form with Image Upload
import React, { useState } from 'react';
import { FiSave, FiX } from 'react-icons/fi';
import ImageUpload from '../components/ImageUpload';
import toast from 'react-hot-toast';

const ProductForm = ({ product = null, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: product?.name || '',
    description: product?.description || '',
    price: product?.price || '',
    originalPrice: product?.originalPrice || '',
    category: product?.category || '',
    brand: product?.brand || '',
    condition: product?.condition || 'new',
    stock: product?.stock || '',
    features: product?.features || [''],
    images: product?.images || []
  });

  const [loading, setLoading] = useState(false);

  const categories = [
    { value: 'printers', label: 'Printer & Scanner' },
    { value: 'computers', label: 'PC & Desktop' },
    { value: 'laptops', label: 'Laptop' },
    { value: 'accessories', label: 'Aksesoris' },
    { value: 'services', label: 'Layanan' },
    { value: 'networking', label: 'Networking' },
    { value: 'mobile', label: 'Mobile & Tablet' },
    { value: 'camera', label: 'Kamera' },
    { value: 'office', label: 'Perlengkapan Kantor' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData(prev => ({
      ...prev,
      features: newFeatures
    }));
  };

  const addFeature = () => {
    setFormData(prev => ({
      ...prev,
      features: [...prev.features, '']
    }));
  };

  const removeFeature = (index) => {
    const newFeatures = formData.features.filter((_, i) => i !== index);
    setFormData(prev => ({
      ...prev,
      features: newFeatures
    }));
  };

  const handleImagesChange = (images) => {
    setFormData(prev => ({
      ...prev,
      images: images
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validate required fields
      if (!formData.name || !formData.description || !formData.price || !formData.category) {
        toast.error('Mohon lengkapi semua field yang wajib diisi');
        return;
      }

      if (formData.images.length === 0) {
        toast.error('Minimal upload 1 gambar produk');
        return;
      }

      // Clean up features (remove empty ones)
      const cleanFeatures = formData.features.filter(feature => feature.trim() !== '');

      const productData = {
        ...formData,
        price: parseFloat(formData.price),
        originalPrice: formData.originalPrice ? parseFloat(formData.originalPrice) : null,
        stock: parseInt(formData.stock),
        features: cleanFeatures
      };

      await onSave(productData);
      toast.success(product ? 'Produk berhasil diupdate' : 'Produk berhasil ditambahkan');
    } catch (error) {
      console.error('Save error:', error);
      toast.error('Terjadi kesalahan saat menyimpan produk');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm border p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          {product ? 'Edit Produk' : 'Tambah Produk Baru'}
        </h2>
        <button
          onClick={onCancel}
          className="p-2 text-gray-400 hover:text-gray-600"
        >
          <FiX className="w-6 h-6" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nama Produk *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="input"
              placeholder="Masukkan nama produk"
              required
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
              className="input"
              required
            >
              <option value="">Pilih kategori</option>
              {categories.map(cat => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Merek
            </label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleInputChange}
              className="input"
              placeholder="Masukkan merek produk"
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
              <option value="service">Layanan</option>
            </select>
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
              className="input"
              placeholder="0"
              min="0"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Harga Asli (Opsional)
            </label>
            <input
              type="number"
              name="originalPrice"
              value={formData.originalPrice}
              onChange={handleInputChange}
              className="input"
              placeholder="0"
              min="0"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Stok *
            </label>
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleInputChange}
              className="input"
              placeholder="0"
              min="0"
              required
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Deskripsi Produk *
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
            className="input"
            placeholder="Masukkan deskripsi produk yang detail"
            required
          />
        </div>

        {/* Features */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fitur Produk
          </label>
          <div className="space-y-2">
            {formData.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={feature}
                  onChange={(e) => handleFeatureChange(index, e.target.value)}
                  className="input flex-1"
                  placeholder={`Fitur ${index + 1}`}
                />
                {formData.features.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeFeature(index)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                  >
                    <FiX className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addFeature}
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              + Tambah Fitur
            </button>
          </div>
        </div>

        {/* Images */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gambar Produk *
          </label>
          <ImageUpload
            images={formData.images}
            onImagesChange={handleImagesChange}
            maxImages={5}
            multiple={true}
          />
        </div>

        {/* Submit Buttons */}
        <div className="flex items-center justify-end space-x-4 pt-6 border-t">
          <button
            type="button"
            onClick={onCancel}
            className="btn btn-outline"
            disabled={loading}
          >
            Batal
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
          >
            <FiSave className="w-4 h-4 mr-2" />
            {loading ? 'Menyimpan...' : (product ? 'Update Produk' : 'Simpan Produk')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
