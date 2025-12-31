const Press = () => {
  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl font-bold mb-8">Siaran Pers</h1>
      <div className="space-y-8">
        <article className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Inter Medi-A Luncurkan Platform E-Commerce Terbaru</h2>
          <p className="text-gray-500 mb-4">24 Desember 2024</p>
          <p className="text-gray-700">
            Inter Medi-A dengan bangga mengumumkan peluncuran platform e-commerce terbaru yang menyediakan 
            solusi lengkap untuk kebutuhan peralatan kantor dan teknologi.
          </p>
        </article>
        <article className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Ekspansi Layanan Teknis di Jakarta</h2>
          <p className="text-gray-500 mb-4">15 Desember 2024</p>
          <p className="text-gray-700">
            Kami memperluas layanan teknis dan dukungan pelanggan di wilayah Jakarta untuk memberikan 
            pelayanan yang lebih baik kepada klien korporat.
          </p>
        </article>
      </div>
    </div>
  );
};

export default Press;
