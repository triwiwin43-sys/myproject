const Shipping = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Informasi Pengiriman</h1>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">Area Pengiriman</h2>
              <p className="text-gray-600">Kami melayani pengiriman ke seluruh wilayah Jakarta dan kota-kota sekitarnya.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">Biaya Pengiriman</h2>
              <ul className="text-gray-600 space-y-1">
                <li>• Jakarta: Gratis ongkir untuk pembelian di atas Rp 500.000</li>
                <li>• Bogor, Depok, Tangerang, Bekasi: Rp 25.000</li>
                <li>• Kota lain: Hubungi kami untuk tarif pengiriman</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">Waktu Pengiriman</h2>
              <p className="text-gray-600">1-3 hari kerja untuk wilayah Jakarta, 3-5 hari kerja untuk wilayah lain.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
