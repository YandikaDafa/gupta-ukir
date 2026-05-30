import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function TentangKami() {
  return (
    <div className="page-container">
      <nav className="navbar">
        {/* Logo sebagai link ke Beranda */}
        <Link to="/" className="logo-link">
          <img 
            src="/logo-black-garlic.png" 
            alt="Dewata Black Garlic" 
            style={{ height: '50px', display: 'block' }} 
          />
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
        <h1 className="title">Tentang Dewata Black Garlic</h1>
        <p className="intro">
          Didirikan pada <strong>12 November 2025</strong>, <strong>Dewata Black Garlic</strong> hadir dengan dedikasi penuh untuk menghadirkan solusi kesehatan alami bagi keluarga Indonesia.
        </p>

        <h2 className="section-title">Mengapa Memilih Produk Kami?</h2>
        <p>Black Garlic kami diproses melalui fermentasi alami dengan kontrol suhu dan kelembapan yang presisi untuk hasilkan kualitas antioksidan terbaik.</p>

        <h3 className="list-title">Manfaat Utama untuk Kesehatan Anda:</h3>
        <ul className="benefit-list">
          <li>Meningkatkan sistem kekebalan tubuh secara alami.</li>
          <li>Membantu menurunkan kadar kolesterol jahat (LDL).</li>
          <li>Menjaga kesehatan jantung dan pembuluh darah.</li>
          <li>Membantu mengatur kadar gula darah.</li>
          <li>Melawan risiko peradangan.</li>
          <li>Membantu meredakan keluhan asam urat.</li>
        </ul>

        <div className="info-box">
          <h3>Saran Konsumsi</h3>
          <p>Konsumsi langsung <strong>2-3 butir setiap hari</strong>. 100% alami dan tanpa bahan pengawet.</p>
          <p className="contact-cta">
            Butuh konsultasi? Hubungi kami via WhatsApp: 
            <a href="https://wa.me/628135988482" target="_blank" rel="noopener noreferrer"> 08135988482</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TentangKami;