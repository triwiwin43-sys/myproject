import React, { useState } from 'react';
import { FiCreditCard, FiPlus, FiEdit, FiTrash2, FiCheck, FiX, FiSave, FiHome, FiSmartphone } from 'react-icons/fi';

const PaymentMethods = () => {
  const [showAddMethod, setShowAddMethod] = useState(false);
  const [editingMethod, setEditingMethod] = useState(null);
  const [newMethod, setNewMethod] = useState({
    type: 'bank',
    name: '',
    accountNumber: '',
    accountName: '',
    bankCode: '',
    description: ''
  });

  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: 'bank',
      name: 'Bank BCA',
      accountNumber: '1234567890',
      accountName: 'Inter Medi-A Store',
      bankCode: 'BCA',
      status: 'active',
      description: 'Primary business account',
      transactions: 145,
      lastUsed: '2024-01-15'
    },
    {
      id: 2,
      type: 'ewallet',
      name: 'GoPay',
      accountNumber: '081234567890',
      accountName: 'Inter Medi-A Store',
      bankCode: 'GOPAY',
      status: 'active',
      description: 'For small transactions',
      transactions: 89,
      lastUsed: '2024-01-14'
    },
    {
      id: 3,
      type: 'bank',
      name: 'Bank Mandiri',
      accountNumber: '0987654321',
      accountName: 'Inter Medi-A Store',
      bankCode: 'MANDIRI',
      status: 'inactive',
      description: 'Backup account',
      transactions: 23,
      lastUsed: '2024-01-10'
    }
  ]);

  const methodStats = [
    { label: 'Total Methods', value: paymentMethods.length, color: 'blue' },
    { label: 'Active Methods', value: paymentMethods.filter(m => m.status === 'active').length, color: 'green' },
    { label: 'Total Transactions', value: paymentMethods.reduce((acc, m) => acc + m.transactions, 0), color: 'purple' },
    { label: 'Bank Accounts', value: paymentMethods.filter(m => m.type === 'bank').length, color: 'orange' }
  ];

  const handleAddMethod = () => {
    if (newMethod.name && newMethod.accountNumber && newMethod.accountName) {
      const method = {
        id: paymentMethods.length + 1,
        ...newMethod,
        status: 'active',
        transactions: 0,
        lastUsed: new Date().toISOString().split('T')[0]
      };
      setPaymentMethods([...paymentMethods, method]);
      resetForm();
    }
  };

  const handleEditMethod = (method) => {
    setEditingMethod(method);
    setNewMethod(method);
    setShowAddMethod(true);
  };

  const handleUpdateMethod = () => {
    if (editingMethod) {
      setPaymentMethods(paymentMethods.map(m => 
        m.id === editingMethod.id ? { ...newMethod } : m
      ));
      resetForm();
    }
  };

  const handleDeleteMethod = (methodId) => {
    if (window.confirm('Are you sure you want to delete this payment method?')) {
      setPaymentMethods(paymentMethods.filter(m => m.id !== methodId));
    }
  };

  const handleToggleStatus = (methodId) => {
    setPaymentMethods(paymentMethods.map(m => 
      m.id === methodId ? { ...m, status: m.status === 'active' ? 'inactive' : 'active' } : m
    ));
  };

  const resetForm = () => {
    setNewMethod({
      type: 'bank',
      name: '',
      accountNumber: '',
      accountName: '',
      bankCode: '',
      description: ''
    });
    setShowAddMethod(false);
    setEditingMethod(null);
  };

  const getPaymentIcon = (type) => {
    switch (type) {
      case 'bank': return <FiHome className="w-6 h-6" />;
      case 'ewallet': return <FiSmartphone className="w-6 h-6" />;
      default: return <FiCreditCard className="w-6 h-6" />;
    }
  };

  const getStatusColor = (status) => {
    return status === 'active' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-gray-100 text-gray-800';
  };

  const bankOptions = [
    { code: 'BCA', name: 'Bank BCA' },
    { code: 'MANDIRI', name: 'Bank Mandiri' },
    { code: 'BNI', name: 'Bank BNI' },
    { code: 'BRI', name: 'Bank BRI' },
    { code: 'CIMB', name: 'CIMB Niaga' },
    { code: 'DANAMON', name: 'Bank Danamon' }
  ];

  const ewalletOptions = [
    { code: 'GOPAY', name: 'GoPay' },
    { code: 'OVO', name: 'OVO' },
    { code: 'DANA', name: 'DANA' },
    { code: 'LINKAJA', name: 'LinkAja' },
    { code: 'SHOPEEPAY', name: 'ShopeePay' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Payment Methods</h1>
          <p className="text-gray-600">Manage payment methods for your store</p>
        </div>
        <button 
          onClick={() => setShowAddMethod(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
        >
          <FiPlus className="w-4 h-4 mr-2" />
          Add Payment Method
        </button>
      </div>

      {/* Payment Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {methodStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Payment Method Modal */}
      {showAddMethod && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {editingMethod ? 'Edit Payment Method' : 'Add New Payment Method'}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                <select
                  value={newMethod.type}
                  onChange={(e) => setNewMethod({...newMethod, type: e.target.value, name: '', bankCode: ''})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                >
                  <option value="bank">Bank Account</option>
                  <option value="ewallet">E-Wallet</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {newMethod.type === 'bank' ? 'Bank Name' : 'E-Wallet Provider'}
                </label>
                <select
                  value={newMethod.bankCode}
                  onChange={(e) => {
                    const selected = newMethod.type === 'bank' 
                      ? bankOptions.find(b => b.code === e.target.value)
                      : ewalletOptions.find(e => e.code === e.target.value);
                    setNewMethod({
                      ...newMethod, 
                      bankCode: e.target.value,
                      name: selected ? selected.name : ''
                    });
                  }}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select {newMethod.type === 'bank' ? 'Bank' : 'E-Wallet'}</option>
                  {(newMethod.type === 'bank' ? bankOptions : ewalletOptions).map(option => (
                    <option key={option.code} value={option.code}>{option.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {newMethod.type === 'bank' ? 'Account Number' : 'Phone Number'}
                </label>
                <input
                  type="text"
                  value={newMethod.accountNumber}
                  onChange={(e) => setNewMethod({...newMethod, accountNumber: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                  placeholder={newMethod.type === 'bank' ? 'Enter account number' : 'Enter phone number'}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Account Name</label>
                <input
                  type="text"
                  value={newMethod.accountName}
                  onChange={(e) => setNewMethod({...newMethod, accountName: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter account holder name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description (Optional)</label>
                <textarea
                  value={newMethod.description}
                  onChange={(e) => setNewMethod({...newMethod, description: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                  rows={2}
                  placeholder="Add a description for this payment method"
                />
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                onClick={editingMethod ? handleUpdateMethod : handleAddMethod}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex items-center justify-center"
              >
                <FiSave className="w-4 h-4 mr-2" />
                {editingMethod ? 'Update' : 'Save'}
              </button>
              <button
                onClick={resetForm}
                className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Payment Methods List */}
      <div className="grid gap-4">
        {paymentMethods.map((method) => (
          <div key={method.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  method.type === 'bank' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                }`}>
                  {getPaymentIcon(method.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-1">
                    <h3 className="font-semibold text-gray-900">{method.name}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(method.status)}`}>
                      {method.status}
                    </span>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700">
                      {method.type === 'bank' ? 'Bank' : 'E-Wallet'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">
                    {method.type === 'bank' ? 'Account:' : 'Phone:'} {method.accountNumber}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">{method.accountName}</p>
                  {method.description && (
                    <p className="text-xs text-gray-500 mb-2">{method.description}</p>
                  )}
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>{method.transactions} transactions</span>
                    <span>•</span>
                    <span>Last used: {new Date(method.lastUsed).toLocaleDateString('id-ID')}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleToggleStatus(method.id)}
                  className={`p-2 rounded-lg ${
                    method.status === 'active' 
                      ? 'text-green-600 hover:bg-green-50' 
                      : 'text-gray-400 hover:bg-gray-50'
                  }`}
                  title={method.status === 'active' ? 'Deactivate' : 'Activate'}
                >
                  {method.status === 'active' ? <FiCheck className="w-4 h-4" /> : <FiX className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => handleEditMethod(method)}
                  className="text-blue-600 hover:text-blue-800 p-2 hover:bg-blue-50 rounded-lg"
                  title="Edit"
                >
                  <FiEdit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDeleteMethod(method.id)}
                  className="text-red-600 hover:text-red-800 p-2 hover:bg-red-50 rounded-lg"
                  title="Delete"
                >
                  <FiTrash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tips */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <div className="flex items-start space-x-3">
          <FiCheck className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-blue-900 mb-2">Payment Method Tips</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Ensure all account information is accurate and up-to-date</li>
              <li>• Keep at least 2 active payment methods for backup</li>
              <li>• Bank accounts are preferred for large transactions</li>
              <li>• E-wallets are great for quick, small payments</li>
              <li>• Regularly check transaction history for accuracy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
