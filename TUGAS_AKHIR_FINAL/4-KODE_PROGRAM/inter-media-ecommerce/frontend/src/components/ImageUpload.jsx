// Frontend: Image Upload Component for Admin
import React, { useState, useRef } from 'react';
import { FiUpload, FiX, FiImage, FiTrash2 } from 'react-icons/fi';
import toast from 'react-hot-toast';

const ImageUpload = ({ 
  images = [], 
  onImagesChange, 
  maxImages = 5, 
  multiple = true 
}) => {
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const uploadImage = async (files) => {
    setUploading(true);
    
    try {
      const formData = new FormData();
      
      if (multiple) {
        Array.from(files).forEach(file => {
          formData.append('images', file);
        });
      } else {
        formData.append('image', files[0]);
      }

      const endpoint = multiple ? '/api/upload/upload-multiple' : '/api/upload/upload';
      
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        const newImages = multiple ? result.data : [result.data];
        const updatedImages = [...images, ...newImages];
        
        if (updatedImages.length > maxImages) {
          toast.error(`Maksimal ${maxImages} gambar`);
          return;
        }
        
        onImagesChange(updatedImages);
        toast.success('Gambar berhasil diupload');
      } else {
        toast.error(result.message || 'Upload gagal');
      }
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('Terjadi kesalahan saat upload');
    } finally {
      setUploading(false);
    }
  };

  const handleFileSelect = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      uploadImage(files);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      uploadImage(e.dataTransfer.files);
    }
  };

  const removeImage = async (index) => {
    try {
      const imageToRemove = images[index];
      
      // Delete from server
      await fetch(`/api/upload/delete/${imageToRemove.filename}`, {
        method: 'DELETE'
      });
      
      // Remove from state
      const updatedImages = images.filter((_, i) => i !== index);
      onImagesChange(updatedImages);
      
      toast.success('Gambar berhasil dihapus');
    } catch (error) {
      console.error('Delete error:', error);
      toast.error('Gagal menghapus gambar');
    }
  };

  return (
    <div className="space-y-4">
      {/* Upload Area */}
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
          dragActive 
            ? 'border-blue-500 bg-blue-50' 
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple={multiple}
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
        
        <FiImage className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        
        <div className="space-y-2">
          <p className="text-sm text-gray-600">
            Drag & drop gambar di sini, atau{' '}
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="text-blue-600 hover:text-blue-700 font-medium"
              disabled={uploading}
            >
              pilih file
            </button>
          </p>
          <p className="text-xs text-gray-500">
            PNG, JPG, GIF hingga 5MB. Maksimal {maxImages} gambar.
          </p>
        </div>
        
        {uploading && (
          <div className="mt-4">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-lg">
              <FiUpload className="w-4 h-4 mr-2 animate-pulse" />
              Mengupload...
            </div>
          </div>
        )}
      </div>

      {/* Image Preview */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={image.url}
                  alt={image.originalName}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
              >
                <FiX className="w-4 h-4" />
              </button>
              
              <div className="absolute bottom-2 left-2 right-2">
                <div className="bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded truncate">
                  {image.originalName}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {images.length > 0 && (
        <div className="text-sm text-gray-500">
          {images.length} dari {maxImages} gambar
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
