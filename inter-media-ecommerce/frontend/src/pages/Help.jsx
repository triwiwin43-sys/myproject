const Help = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Help Center</h1>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900">How to place an order?</h3>
              <p className="text-gray-600 mt-1">Browse products, add to cart, and proceed to checkout.</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">What payment methods do you accept?</h3>
              <p className="text-gray-600 mt-1">We accept bank transfer, credit cards, and e-wallet payments.</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">How long is the warranty?</h3>
              <p className="text-gray-600 mt-1">All products come with official manufacturer warranty.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
