import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Produk() {
  const listProduk = [
    { 
      id: 1, 
      nama: 'Relief Kayu Klasik', 
      harga: 'Rp 2.500.000', 
      desc: 'Ukiran dinding artistik dengan berbagai motif klasik dan kontemporer khas Bali.',
      detail: 'Dikerjakan secara detail oleh perajin berpengalaman menggunakan kayu pilihan terbaik yang awet dan tahan lama.',
      netto: 'Custom / Sesuai Ukuran',
      img: './relief1.png' 
    },
    { 
      id: 2, 
      nama: 'Loster Ukir Estetik', 
      harga: 'Rp 150.000', 
      desc: 'Ventilasi atau lubang angin berukir estetik untuk sirkulasi udara rumah yang elegan.',
      detail: 'Cocok dipasang pada dinding rumah, villa, atau bangunan pura untuk menambah nilai estetika arsitektur tradisional.',
      netto: 'Per Unit',
      img: './relief2.png' 
    },
    { 
      id: 3, 
      nama: 'Ornamen Menur Bali', 
      harga: 'Rp 350.000', 
      desc: 'Ornamen ukiran khas tradisional Bali untuk pelengkap bangunan dan arsitektur.',
      detail: 'Dipahat langsung dengan tangan (handmade) mencerminkan kekayaan seni ukir tradisional asal Tabanan.',
      netto: 'Per Pcs / Set',
      img: './ukirproduksi1.png' 
    },
    {
      id: 4, 
      nama: 'Ornamen Pemucuh Bali', 
      harga: 'Rp 350.000', 
      desc: 'Ornamen ukiran khas tradisional Bali untuk pelengkap bangunan dan arsitektur.',
      detail: 'Dipahat langsung dengan tangan (handmade) mencerminkan kekayaan seni ukir tradisional asal Tabanan.',
      netto: 'Per Pcs / Set',
      img: './ukirproduk1.png' 
    }
  ];

  return (
    <div className="page-container">
      <nav className="navbar">
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

      <div className="content-wrapper" style={{ paddingBottom: '50px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Katalog Produk Ukiran</h1>
        
        <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {listProduk.map((item) => (
            <div key={item.id} className="card" style={{ padding: '20px', textAlign: 'left' }}>
              <img src={item.img} alt={item.nama} className="card-img" style={{ height: '250px', objectFit: 'contain' }} />
              <h3 style={{ color: '#bf9b30' }}>{item.nama}</h3>
              <p style={{ fontSize: '0.9rem', color: '#555', margin: '10px 0' }}>{item.desc}</p>
              
              <div style={{ fontSize: '0.85rem', color: '#333', background: '#906309', padding: '10px', borderRadius: '8px', marginBottom: '15px' }}>
                <p><strong>Detail:</strong> {item.detail}</p>
                <p style={{ marginTop: '5px' }}><strong>Kategori/Ukuran:</strong> {item.netto}</p>
              </div>

              <p className="price" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#386641', textAlign: 'center' }}>{item.harga}</p>
              <button 
                className="wa-btn" 
                onClick={() => window.open(`https://wa.me/628135988482?text=Halo%20Gupta%20Bali%20Ukir,%20saya%20mau%20pesan%20${encodeURIComponent(item.nama)}`)}
              >
                Pesan via WhatsApp
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Produk;