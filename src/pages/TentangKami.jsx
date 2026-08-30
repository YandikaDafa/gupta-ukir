import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function TentangKami() {
  return (
    <div className="page-container">
      <nav className="navbar">
        {/* Menggunakan path relatif agar gambar selalu ditemukan */}
        <Link to="/" className="logo-link">
          <img 
            src="./logo-gupta-bali.png" 
            alt="Gupta Bali Ukir D'Bali" 
            style={{ height: '50px', display: 'block' }} 
          />
          <span className="logo-text">Gupta Bali Ukir D'Bali</span>
        </Link>
        
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-active" : ""}>
              Beranda
            </NavLink>
          </li>
          <li>
            <NavLink to="/produk" className={({ isActive }) => isActive ? "nav-active" : ""}>
              Produk
            </NavLink>
          </li>
          <li>
            <NavLink to="/tentang" className={({ isActive }) => isActive ? "nav-active" : ""}>
              Tentang Kami
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="content-wrapper">
        <h1 className="title">Tentang Gupta Bali Ukir D'Bali</h1>
        <p className="intro">
          Didirikan pada tahun <strong>2009</strong>, <strong>Gupta Bali Ukir d'Bali</strong> berlokasi di <strong>Br. Dinas Jakatebel, Desa Tangguntiti, Kec. Selemadeg Timur, Kab. Tabanan</strong>, hadir dengan dedikasi penuh untuk melestarikan dan menghadirkan karya seni ukir kayu berkualitas tinggi khas Bali.
        </p>

        <h2 className="section-title">Mengapa Memilih Ukiran Kami?</h2>
        <p>Setiap produk ukiran dikerjakan secara teliti oleh perajin berpengalaman menggunakan kayu pilihan terbaik, menghasilkan detail seni yang bernilai tinggi dan tahan lama untuk memperindah bangunan Anda.</p>

        <h3 className="list-title">Berbagai Produk & Layanan Ukiran Kami:</h3>
        <ul className="benefit-list">
          <li><strong>Relief:</strong> Ukiran dinding artistik dengan berbagai motif klasik dan kontemporer.</li>
          <li><strong>Loster:</strong> Ventilasi atau lubang angin berukir estetik untuk sirkulasi udara rumah yang elegan.</li>
          <li><strong>Menur:</strong> Ornamen ukiran khas tradisional Bali untuk pelengkap bangunan dan arsitektur.</li>
          <li>Menerima pesanan berbagai jenis ukiran kayu custom sesuai kebutuhan Anda.</li>
        </ul>

        <div className="info-box">
          <h3>Informasi & Pemesanan</h3>
          <p>Konsultasikan kebutuhan ukiran Anda bersama kami. 100% karya seni ukir tangan asli Bali.</p>
          <p className="contact-cta">
            Tertarik memesan? Hubungi kami via WhatsApp: 
            <a href="https://wa.me/628135988482" target="_blank" rel="noopener noreferrer"> 08135988482</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TentangKami;