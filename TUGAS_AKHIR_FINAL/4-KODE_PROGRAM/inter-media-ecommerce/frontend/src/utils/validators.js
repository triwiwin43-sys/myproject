// Validation utilities for Indonesian context

// Email validation
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Indonesian phone number validation
export const validatePhoneNumber = (phone) => {
  // Remove all non-digits
  const cleaned = phone.replace(/\D/g, '');
  
  // Indonesian phone patterns
  const patterns = [
    /^62[0-9]{9,12}$/, // International format (+62)
    /^0[0-9]{9,12}$/,  // Local format (0xxx)
    /^[0-9]{10,13}$/   // Without country code
  ];
  
  return patterns.some(pattern => pattern.test(cleaned));
};

// Password validation
export const validatePassword = (password) => {
  const errors = [];
  
  if (password.length < 6) {
    errors.push('Kata sandi minimal 6 karakter');
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('Kata sandi harus mengandung huruf besar');
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('Kata sandi harus mengandung huruf kecil');
  }
  
  if (!/[0-9]/.test(password)) {
    errors.push('Kata sandi harus mengandung angka');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Indonesian name validation
export const validateName = (name) => {
  if (!name || name.trim().length < 2) {
    return { isValid: false, error: 'Nama minimal 2 karakter' };
  }
  
  if (name.trim().length > 50) {
    return { isValid: false, error: 'Nama maksimal 50 karakter' };
  }
  
  // Allow Indonesian characters, spaces, and common punctuation
  const nameRegex = /^[a-zA-Z\s.',-]+$/;
  if (!nameRegex.test(name)) {
    return { isValid: false, error: 'Nama hanya boleh mengandung huruf dan tanda baca umum' };
  }
  
  return { isValid: true };
};

// Indonesian postal code validation
export const validatePostalCode = (postalCode) => {
  const cleaned = postalCode.replace(/\D/g, '');
  
  if (cleaned.length !== 5) {
    return { isValid: false, error: 'Kode pos harus 5 digit' };
  }
  
  return { isValid: true };
};

// File validation
export const validateFile = (file, options = {}) => {
  const {
    maxSize = 5 * 1024 * 1024, // 5MB default
    allowedTypes = ['image/jpeg', 'image/png', 'image/webp']
  } = options;
  
  const errors = [];
  
  if (file.size > maxSize) {
    errors.push(`Ukuran file maksimal ${Math.round(maxSize / 1024 / 1024)}MB`);
  }
  
  if (!allowedTypes.includes(file.type)) {
    errors.push(`Tipe file harus: ${allowedTypes.join(', ')}`);
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Price validation
export const validatePrice = (price) => {
  const numPrice = parseFloat(price);
  
  if (isNaN(numPrice) || numPrice <= 0) {
    return { isValid: false, error: 'Harga harus berupa angka positif' };
  }
  
  if (numPrice > 999999999) {
    return { isValid: false, error: 'Harga terlalu besar' };
  }
  
  return { isValid: true };
};

// Stock validation
export const validateStock = (stock) => {
  const numStock = parseInt(stock);
  
  if (isNaN(numStock) || numStock < 0) {
    return { isValid: false, error: 'Stok harus berupa angka non-negatif' };
  }
  
  if (numStock > 999999) {
    return { isValid: false, error: 'Stok terlalu besar' };
  }
  
  return { isValid: true };
};

// Required field validation
export const validateRequired = (value, fieldName) => {
  if (!value || (typeof value === 'string' && value.trim() === '')) {
    return { isValid: false, error: `${fieldName} wajib diisi` };
  }
  
  return { isValid: true };
};

// URL validation
export const validateURL = (url) => {
  try {
    new URL(url);
    return { isValid: true };
  } catch {
    return { isValid: false, error: 'URL tidak valid' };
  }
};

// Form validation helper
export const validateForm = (data, rules) => {
  const errors = {};
  let isValid = true;
  
  Object.keys(rules).forEach(field => {
    const rule = rules[field];
    const value = data[field];
    
    if (rule.required) {
      const validation = validateRequired(value, rule.label || field);
      if (!validation.isValid) {
        errors[field] = validation.error;
        isValid = false;
        return;
      }
    }
    
    if (value && rule.type) {
      let validation;
      
      switch (rule.type) {
        case 'email':
          validation = validateEmail(value) ? { isValid: true } : { isValid: false, error: 'Format email tidak valid' };
          break;
        case 'phone':
          validation = validatePhoneNumber(value) ? { isValid: true } : { isValid: false, error: 'Format nomor telepon tidak valid' };
          break;
        case 'password':
          validation = validatePassword(value);
          break;
        case 'name':
          validation = validateName(value);
          break;
        case 'price':
          validation = validatePrice(value);
          break;
        case 'stock':
          validation = validateStock(value);
          break;
        case 'url':
          validation = validateURL(value);
          break;
        default:
          validation = { isValid: true };
      }
      
      if (!validation.isValid) {
        errors[field] = validation.error || validation.errors?.[0];
        isValid = false;
      }
    }
  });
  
  return { isValid, errors };
};

export default {
  validateEmail,
  validatePhoneNumber,
  validatePassword,
  validateName,
  validatePostalCode,
  validateFile,
  validatePrice,
  validateStock,
  validateRequired,
  validateURL,
  validateForm
};
