const Cookies = () => {
  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl font-bold mb-8">Kebijakan Cookie</h1>
      <div className="prose max-w-none">
        <h2>Apa itu Cookie?</h2>
        <p>
          Cookie adalah file kecil yang disimpan di perangkat Anda saat mengunjungi situs web kami. 
          Cookie membantu kami memberikan pengalaman yang lebih baik dan personal.
        </p>
        
        <h2>Jenis Cookie yang Kami Gunakan</h2>
        <ul>
          <li><strong>Cookie Penting:</strong> Diperlukan untuk fungsi dasar situs web</li>
          <li><strong>Cookie Analitik:</strong> Membantu kami memahami penggunaan situs web</li>
          <li><strong>Cookie Fungsional:</strong> Mengingat preferensi Anda</li>
          <li><strong>Cookie Pemasaran:</strong> Menampilkan iklan yang relevan</li>
        </ul>
        
        <h2>Mengelola Cookie</h2>
        <p>
          Anda dapat mengatur preferensi cookie melalui pengaturan browser Anda. 
          Namun, menonaktifkan cookie tertentu dapat mempengaruhi fungsi situs web.
        </p>
        
        <div className="bg-blue-50 p-4 rounded-lg mt-6">
          <p className="text-blue-800">
            Dengan melanjutkan menggunakan situs web ini, Anda menyetujui penggunaan cookie 
            sesuai dengan kebijakan ini.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
