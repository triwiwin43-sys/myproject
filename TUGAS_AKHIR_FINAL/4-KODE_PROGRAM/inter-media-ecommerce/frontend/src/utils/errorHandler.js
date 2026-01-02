import toast from 'react-hot-toast';

// Error types
export const ERROR_TYPES = {
  NETWORK: 'NETWORK_ERROR',
  VALIDATION: 'VALIDATION_ERROR',
  AUTH: 'AUTH_ERROR',
  SERVER: 'SERVER_ERROR',
  NOT_FOUND: 'NOT_FOUND',
  PERMISSION: 'PERMISSION_ERROR'
};

// Error messages in Indonesian
const ERROR_MESSAGES = {
  [ERROR_TYPES.NETWORK]: 'Koneksi internet bermasalah. Silakan coba lagi.',
  [ERROR_TYPES.VALIDATION]: 'Data yang dimasukkan tidak valid.',
  [ERROR_TYPES.AUTH]: 'Sesi Anda telah berakhir. Silakan login kembali.',
  [ERROR_TYPES.SERVER]: 'Terjadi kesalahan pada server. Silakan coba lagi.',
  [ERROR_TYPES.NOT_FOUND]: 'Data yang dicari tidak ditemukan.',
  [ERROR_TYPES.PERMISSION]: 'Anda tidak memiliki izin untuk melakukan aksi ini.',
  default: 'Terjadi kesalahan yang tidak diketahui.'
};

// Error handler class
export class ErrorHandler {
  static handle(error, showToast = true) {
    console.error('Error occurred:', error);
    
    let errorType = ERROR_TYPES.SERVER;
    let message = ERROR_MESSAGES.default;
    
    if (error.response) {
      // Server responded with error status
      const status = error.response.status;
      
      switch (status) {
        case 400:
          errorType = ERROR_TYPES.VALIDATION;
          message = error.response.data?.message || ERROR_MESSAGES[ERROR_TYPES.VALIDATION];
          break;
        case 401:
          errorType = ERROR_TYPES.AUTH;
          message = ERROR_MESSAGES[ERROR_TYPES.AUTH];
          break;
        case 403:
          errorType = ERROR_TYPES.PERMISSION;
          message = ERROR_MESSAGES[ERROR_TYPES.PERMISSION];
          break;
        case 404:
          errorType = ERROR_TYPES.NOT_FOUND;
          message = ERROR_MESSAGES[ERROR_TYPES.NOT_FOUND];
          break;
        case 500:
        default:
          errorType = ERROR_TYPES.SERVER;
          message = error.response.data?.message || ERROR_MESSAGES[ERROR_TYPES.SERVER];
      }
    } else if (error.request) {
      // Network error
      errorType = ERROR_TYPES.NETWORK;
      message = ERROR_MESSAGES[ERROR_TYPES.NETWORK];
    } else {
      // Other error
      message = error.message || ERROR_MESSAGES.default;
    }
    
    if (showToast) {
      toast.error(message);
    }
    
    return {
      type: errorType,
      message,
      originalError: error
    };
  }
  
  static handleValidation(errors) {
    if (Array.isArray(errors)) {
      errors.forEach(error => toast.error(error.message));
    } else if (typeof errors === 'object') {
      Object.values(errors).forEach(error => {
        if (typeof error === 'string') {
          toast.error(error);
        } else if (error.message) {
          toast.error(error.message);
        }
      });
    } else {
      toast.error(errors || ERROR_MESSAGES[ERROR_TYPES.VALIDATION]);
    }
  }
}

// Success handler
export class SuccessHandler {
  static handle(message, data = null) {
    toast.success(message);
    return { message, data };
  }
}

export default ErrorHandler;
