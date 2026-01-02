const Refund = () => {
  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl font-bold mb-8">Kebijakan Pengembalian Dana</h1>
      <div className="prose max-w-none">
        <h2>Syarat Pengembalian Dana</h2>
        <ul>
          <li>Permintaan pengembalian dana harus diajukan dalam 7 hari setelah pembelian</li>
          <li>Produk harus dalam kondisi asli dan belum digunakan</li>
          <li>Kemasan dan aksesori harus lengkap</li>
          <li>Menyertakan bukti pembelian yang sah</li>
        </ul>
        
        <h2>Proses Pengembalian Dana</h2>
        <ol>
          <li>Hubungi layanan pelanggan kami</li>
          <li>Isi formulir pengembalian dana</li>
          <li>Kirim produk ke alamat yang ditentukan</li>
          <li>Tim kami akan melakukan verifikasi</li>
          <li>Dana akan dikembalikan dalam 3-5 hari kerja</li>
        </ol>
        
        <h2>Pengecualian</h2>
        <p>Pengembalian dana tidak berlaku untuk:</p>
        <ul>
          <li>Produk khusus atau pesanan sesuai permintaan</li>
          <li>Produk digital atau perangkat lunak</li>
          <li>Produk yang rusak karena kesalahan pengguna</li>
          <li>Produk dengan masa garansi yang telah berakhir</li>
        </ul>
        
        <div className="bg-yellow-50 p-4 rounded-lg mt-6">
          <p className="text-yellow-800">
            <strong>Catatan:</strong> Biaya pengiriman untuk pengembalian produk ditanggung oleh pembeli, 
            kecuali jika produk cacat atau tidak sesuai pesanan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Refund;
