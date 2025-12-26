import React, { useState } from 'react';
import { FiCreditCard, FiPlus, FiEdit, FiTrash2, FiCheck } from 'react-icons/fi';

const PaymentMethods = () => {
  const [paymentMethods] = useState([
    {
      id: 1,
      type: 'bank',
      name: 'Bank BCA',
      accountNumber: '1234567890',
      accountName: 'Inter Medi-A Store',
      status: 'active'
    },
    {
      id: 2,
      type: 'ewallet',
      name: 'GoPay',
      accountNumber: '081234567890',
      accountName: 'Inter Medi-A Store',
      status: 'active'
    },
    {
      id: 3,
      type: 'bank',
      name: 'Bank Mandiri',
      accountNumber: '0987654321',
      accountName: 'Inter Medi-A Store',
      status: 'inactive'
    }
  ]);

  const getPaymentIcon = (type) => {
    return <FiCreditCard className="w-6 h-6" />;
  };

  const getStatusColor = (status) => {
    return status === 'active' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Metode Pembayaran</h1>
          <p className="text-gray-600">Kelola metode pembayaran untuk toko Anda</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
          <FiPlus className="w-4 h-4 mr-2" />
          Tambah Metode
        </button>
      </div>

      <div className="grid gap-4">
        {paymentMethods.map((method) => (
          <div key={method.id} className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  {getPaymentIcon(method.type)}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{method.name}</h3>
                  <p className="text-sm text-gray-600">{method.accountNumber}</p>
                  <p className="text-sm text-gray-500">{method.accountName}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(method.status)}`}>
                  {method.status === 'active' ? 'Aktif' : 'Nonaktif'}
                </span>
                <div className="flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <FiEdit className="w-4 h-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <FiTrash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <FiCheck className="w-5 h-5 text-blue-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-blue-900">Tips Metode Pembayaran</h4>
            <p className="text-sm text-blue-700 mt-1">
              Pastikan informasi rekening yang Anda masukkan benar dan aktif. 
              Pelanggan akan melakukan transfer ke rekening ini untuk pembayaran pesanan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
