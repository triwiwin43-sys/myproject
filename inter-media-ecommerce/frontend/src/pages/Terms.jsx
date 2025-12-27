const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">Acceptance of Terms</h2>
              <p className="text-gray-600">By using our website and services, you agree to these terms and conditions.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">User Responsibilities</h2>
              <ul className="text-gray-600 space-y-1">
                <li>• Provide accurate information</li>
                <li>• Use the service lawfully</li>
                <li>• Protect your account credentials</li>
                <li>• Respect intellectual property rights</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">Limitation of Liability</h2>
              <p className="text-gray-600">We are not liable for indirect damages or losses arising from use of our services.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
