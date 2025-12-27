const Returns = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Returns & Refunds</h1>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">Return Policy</h2>
              <p className="text-gray-600">Items can be returned within 7 days of delivery if unused and in original packaging.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">Return Process</h2>
              <ol className="text-gray-600 space-y-1 list-decimal list-inside">
                <li>Contact our customer service</li>
                <li>Pack the item in original packaging</li>
                <li>We'll arrange pickup or you can drop off at our store</li>
                <li>Refund will be processed within 3-5 business days</li>
              </ol>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">Non-Returnable Items</h2>
              <ul className="text-gray-600 space-y-1">
                <li>• Software and digital products</li>
                <li>• Items damaged by misuse</li>
                <li>• Custom-ordered products</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Returns;
