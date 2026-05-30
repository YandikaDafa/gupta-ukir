import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Produk() {
  const listProduk = [
    { 
      id: 1, 
      nama: 'Black Garlic Original', 
      harga: 'Rp 25.000', 
      desc: 'Bawang putih tunggal yang difermentasi dengan suhu tinggi selama 30 hari.',
      detail: 'Tekstur kenyal, rasa manis asam khas buah kering. Menggunakan bahan baku pilihan untuk efikasi kesehatan maksimal.',
      netto: '100gr',
      img: '/black-garlic1.png' 
    },
    { 
      id: 2, 
      nama: 'Black Garlic Premium', 
      harga: 'Rp 50.000', 
      desc: 'Ekstrak murni bawang hitam dalam bentuk bubuk halus.',
      detail: 'Sangat praktis untuk campuran minuman kesehatan, smoothies, atau bahan masakan. Tetap menjaga nutrisi asli bawang hitam.',
      netto: '200gr',
      img: '/black-garlic2.png' 
    },
    { 
      id: 3, 
      nama: 'Black Garlic Gold', 
      harga: 'Rp 90.000', 
      desc: 'Kualitas tertinggi dengan proses fermentasi double-check.',
      detail: 'Kadar antioksidan lebih tinggi. Dikemas eksklusif dengan segel kedap udara untuk menjaga kesegaran hingga ke tangan Anda.',
      netto: '250gr',
      img: '/black-garlic3.png' 
    }
  ];

  return (
    <div className="page-container">
      <nav className="navbar">
        {/* Mengganti teks dengan tag gambar */}
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

      <div className="content-wrapper" style={{ paddingBottom: '50px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Katalog Produk</h1>
        
        <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {listProduk.map((item) => (
            <div key={item.id} className="card" style={{ padding: '20px', textAlign: 'left' }}>
              <img src={item.img} alt={item.nama} className="card-img" style={{ height: '250px', objectFit: 'contain' }} />
              <h3 style={{ color: '#bf9b30' }}>{item.nama}</h3>
              <p style={{ fontSize: '0.9rem', color: '#555', margin: '10px 0' }}>{item.desc}</p>
              
              <div style={{ fontSize: '0.85rem', color: '#333', background: '#fcfaf6', padding: '10px', borderRadius: '8px', marginBottom: '15px' }}>
                <p><strong>Detail:</strong> {item.detail}</p>
                <p style={{ marginTop: '5px' }}><strong>Berat Bersih:</strong> {item.netto}</p>
              </div>

              <p className="price" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#386641', textAlign: 'center' }}>{item.harga}</p>
              <button 
                className="wa-btn" 
                onClick={() => window.open(`https://wa.me/628135988482?text=Halo%20Dewata%20Black%20Garlic,%20saya%20mau%20pesan%20${item.nama}`)}
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