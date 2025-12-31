const Careers = () => {
  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl font-bold mb-8">Karir di Inter Medi-A</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Bergabunglah dengan tim Inter Medi-A dan bangun karir Anda di industri teknologi dan peralatan kantor.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Sales Executive</h3>
            <p className="text-gray-600 mb-4">Mencari kandidat berpengalaman untuk mengembangkan penjualan produk.</p>
            <button className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700">
              Lamar Sekarang
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Technical Support</h3>
            <p className="text-gray-600 mb-4">Memberikan dukungan teknis untuk produk dan layanan kami.</p>
            <button className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700">
              Lamar Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
