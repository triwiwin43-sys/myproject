import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const BackButton = ({ to = -1, className = '' }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (typeof to === 'string') {
      navigate(to);
    } else {
      navigate(to);
    }
  };

  return (
    <button
      onClick={handleBack}
      className={`inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${className}`}
    >
      <FiArrowLeft className="w-4 h-4 mr-2" />
      Kembali
    </button>
  );
};

export default BackButton;
