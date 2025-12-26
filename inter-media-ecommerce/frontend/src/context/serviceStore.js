import { create } from 'zustand';

const useServiceStore = create((set, get) => ({
  serviceRequests: [],
  services: [
    {
      id: 1,
      title: 'Service Laptop & Notebook',
      description: 'Perbaikan laptop, upgrade RAM/SSD, cleaning, install OS',
      icon: 'FiMonitor',
      price: 'Mulai Rp 150.000',
      duration: '1-3 hari',
      features: ['Diagnosa gratis', 'Garansi 30 hari', 'Spare part original', 'Teknisi berpengalaman'],
      active: true
    },
    {
      id: 2,
      title: 'Service Printer & Scanner',
      description: 'Perbaikan printer inkjet/laser, cleaning head, refill toner',
      icon: 'FiPrinter',
      price: 'Mulai Rp 100.000',
      duration: '1-2 hari',
      features: ['Head cleaning', 'Kalibrasi warna', 'Refill toner/tinta', 'Test print gratis'],
      active: true
    },
    {
      id: 3,
      title: 'Service PC & Komputer',
      description: 'Perbaikan PC desktop, upgrade hardware, optimasi performa',
      icon: 'FiMonitor',
      price: 'Mulai Rp 120.000',
      duration: '1-2 hari',
      features: ['Hardware upgrade', 'Cleaning internal', 'Install software', 'Optimasi sistem'],
      active: true
    }
  ],

  // Add service request
  addServiceRequest: (requestData) => {
    const newRequest = {
      id: `SRV-${Date.now()}`,
      ...requestData,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    set(state => ({
      serviceRequests: [...state.serviceRequests, newRequest]
    }));
    
    return newRequest;
  },

  // Update service request status
  updateServiceRequest: (id, updates) => {
    set(state => ({
      serviceRequests: state.serviceRequests.map(request =>
        request.id === id 
          ? { ...request, ...updates, updatedAt: new Date().toISOString() }
          : request
      )
    }));
  },

  // Get service requests by status
  getServiceRequestsByStatus: (status) => {
    const requests = get().serviceRequests;
    if (status === 'all') return requests;
    return requests.filter(request => request.status === status);
  },

  // Get service request by ID
  getServiceRequestById: (id) => {
    return get().serviceRequests.find(request => request.id === id);
  },

  // Delete service request
  deleteServiceRequest: (id) => {
    set(state => ({
      serviceRequests: state.serviceRequests.filter(request => request.id !== id)
    }));
  }
}));

export default useServiceStore;
