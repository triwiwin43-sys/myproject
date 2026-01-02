const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Syarat Layanan</h1>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">Penerimaan Syarat</h2>
              <p className="text-gray-600">Dengan menggunakan situs web dan layanan kami, Anda menyetujui syarat dan ketentuan ini.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">Tanggung Jawab Pengguna</h2>
              <ul className="text-gray-600 space-y-1">
                <li>• Memberikan informasi yang akurat</li>
                <li>• Menggunakan layanan secara sah</li>
                <li>• Melindungi kredensial akun Anda</li>
                <li>• Menghormati hak kekayaan intelektual</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">Batasan Tanggung Jawab</h2>
              <p className="text-gray-600">Kami tidak bertanggung jawab atas kerusakan tidak langsung atau kerugian yang timbul dari penggunaan layanan kami.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
