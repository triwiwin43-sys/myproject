const Shipping = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shipping Information</h1>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">Delivery Areas</h2>
              <p className="text-gray-600">We deliver to all areas in Jakarta and surrounding cities.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">Shipping Costs</h2>
              <ul className="text-gray-600 space-y-1">
                <li>• Jakarta: Free delivery for orders above Rp 500,000</li>
                <li>• Bogor, Depok, Tangerang, Bekasi: Rp 25,000</li>
                <li>• Other cities: Contact us for shipping rates</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">Delivery Time</h2>
              <p className="text-gray-600">1-3 business days for Jakarta area, 3-5 business days for other areas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
