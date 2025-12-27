const Warranty = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Warranty Information</h1>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">Warranty Coverage</h2>
              <p className="text-gray-600">All products come with official manufacturer warranty covering defects and malfunctions.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">Warranty Periods</h2>
              <ul className="text-gray-600 space-y-1">
                <li>• Printers: 1-2 years depending on brand</li>
                <li>• Computers & Laptops: 1-3 years</li>
                <li>• Accessories: 6 months - 1 year</li>
                <li>• Services: 30 days guarantee</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">Warranty Claims</h2>
              <p className="text-gray-600">Contact us with your purchase receipt and product serial number for warranty service.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warranty;
