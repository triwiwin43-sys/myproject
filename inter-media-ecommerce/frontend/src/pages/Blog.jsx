const Blog = () => {
  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl font-bold mb-8">Blog Inter Medi-A</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article className="bg-white rounded-lg shadow overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Tips Memilih Printer untuk Kantor</h2>
            <p className="text-gray-600 mb-4">Panduan lengkap memilih printer yang tepat untuk kebutuhan bisnis Anda.</p>
            <a href="#" className="text-primary-600 hover:text-primary-700">Baca Selengkapnya →</a>
          </div>
        </article>
        <article className="bg-white rounded-lg shadow overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Tren Teknologi Kantor 2024</h2>
            <p className="text-gray-600 mb-4">Teknologi terbaru yang akan mengubah cara kerja di kantor modern.</p>
            <a href="#" className="text-primary-600 hover:text-primary-700">Baca Selengkapnya →</a>
          </div>
        </article>
        <article className="bg-white rounded-lg shadow overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Perawatan Peralatan Kantor</h2>
            <p className="text-gray-600 mb-4">Tips merawat peralatan kantor agar awet dan bekerja optimal.</p>
            <a href="#" className="text-primary-600 hover:text-primary-700">Baca Selengkapnya →</a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Blog;
