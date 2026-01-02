const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Kebijakan Privasi</h1>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">Informasi yang Kami Kumpulkan</h2>
              <p className="text-gray-600">Kami mengumpulkan informasi yang Anda berikan saat membuat akun, melakukan pembelian, dan menghubungi kami.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">Cara Kami Menggunakan Informasi Anda</h2>
              <ul className="text-gray-600 space-y-1">
                <li>• Memproses pesanan dan pembayaran</li>
                <li>• Memberikan dukungan pelanggan</li>
                <li>• Mengirim pembaruan pesanan dan notifikasi</li>
                <li>• Meningkatkan layanan kami</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">Perlindungan Data</h2>
              <p className="text-gray-600">Kami menerapkan langkah-langkah keamanan untuk melindungi informasi pribadi Anda dan tidak pernah membagikannya dengan pihak ketiga tanpa persetujuan.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
