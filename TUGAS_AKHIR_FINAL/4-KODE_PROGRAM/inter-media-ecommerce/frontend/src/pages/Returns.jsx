const Returns = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Pengembalian & Pengembalian Dana</h1>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">Kebijakan Pengembalian</h2>
              <p className="text-gray-600">Barang dapat dikembalikan dalam 7 hari setelah pengiriman jika tidak digunakan dan dalam kemasan asli.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">Proses Pengembalian</h2>
              <ol className="text-gray-600 space-y-1 list-decimal list-inside">
                <li>Hubungi layanan pelanggan kami</li>
                <li>Kemas barang dalam kemasan asli</li>
                <li>Kami akan mengatur penjemputan atau Anda bisa antar ke toko kami</li>
                <li>Pengembalian dana akan diproses dalam 3-5 hari kerja</li>
              </ol>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">Barang yang Tidak Dapat Dikembalikan</h2>
              <ul className="text-gray-600 space-y-1">
                <li>• Software dan produk digital</li>
                <li>• Barang yang rusak karena penyalahgunaan</li>
                <li>• Produk pesanan khusus</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Returns;
