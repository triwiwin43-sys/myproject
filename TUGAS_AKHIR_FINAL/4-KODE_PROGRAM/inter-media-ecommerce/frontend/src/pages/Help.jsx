const Help = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Pusat Bantuan</h1>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-xl font-semibold mb-4">Pertanyaan yang Sering Diajukan</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900">Bagaimana cara memesan?</h3>
              <p className="text-gray-600 mt-1">Jelajahi produk, tambahkan ke keranjang, dan lanjutkan ke checkout.</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Metode pembayaran apa yang diterima?</h3>
              <p className="text-gray-600 mt-1">Kami menerima transfer bank, kartu kredit, dan pembayaran e-wallet.</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Berapa lama masa garansi?</h3>
              <p className="text-gray-600 mt-1">Semua produk dilengkapi dengan garansi resmi dari produsen.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
