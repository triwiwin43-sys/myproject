const Warranty = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Informasi Garansi</h1>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">Cakupan Garansi</h2>
              <p className="text-gray-600">Semua produk dilengkapi dengan garansi resmi produsen yang mencakup cacat dan kerusakan.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">Periode Garansi</h2>
              <ul className="text-gray-600 space-y-1">
                <li>• Printer: 1-2 tahun tergantung merek</li>
                <li>• Komputer & Laptop: 1-3 tahun</li>
                <li>• Aksesoris: 6 bulan - 1 tahun</li>
                <li>• Layanan: Garansi 30 hari</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">Klaim Garansi</h2>
              <p className="text-gray-600">Hubungi kami dengan bukti pembelian dan nomor seri produk untuk layanan garansi.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warranty;
