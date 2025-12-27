const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
              <p className="text-gray-600">We collect information you provide when creating an account, making purchases, and contacting us.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
              <ul className="text-gray-600 space-y-1">
                <li>• Process orders and payments</li>
                <li>• Provide customer support</li>
                <li>• Send order updates and notifications</li>
                <li>• Improve our services</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">Data Protection</h2>
              <p className="text-gray-600">We implement security measures to protect your personal information and never share it with third parties without consent.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
