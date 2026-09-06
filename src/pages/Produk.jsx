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
      img: './relief3.png' 
    },
    { 
      id: 2, 
      nama: 'Loster Ukir Estetik', 
      harga: 'Rp 150.000', 
      desc: 'Ventilasi atau lubang angin berukir estetik untuk sirkulasi udara rumah yang elegan.',
      detail: 'Cocok dipasang pada dinding rumah, villa, atau bangunan pura untuk menambah nilai estetika arsitektur tradisional.',
      netto: 'Per Unit',
      img: './loster1.png' 
    },
    { 
      id: 3, 
      nama: 'Ornamen Menur Bali', 
      harga: 'Rp 350.000', 
      desc: 'Ornamen ukiran khas tradisional Bali untuk pelengkap bangunan dan arsitektur.',
      detail: 'Dipahat langsung dengan tangan (handmade) mencerminkan kekayaan seni ukir tradisional asal Tabanan.',
      netto: 'Per Pcs / Set',
      img: './ornamen1.png' 
    },
    {
      id: 4, 
      nama: 'Ornamen Pemucuh Bali', 
      harga: 'Rp 350.000', 
      desc: 'Ornamen ukiran khas tradisional Bali untuk pelengkap bangunan dan arsitektur.',
      detail: 'Dipahat langsung dengan tangan (handmade) mencerminkan kekayaan seni ukir tradisional asal Tabanan.',
      netto: 'Per Pcs / Set',
      img: './ukirproduk1.png' 
    },
    {
      id: 5, 
      nama: 'Pintu Gebyok Tradisional', 
      harga: 'Rp 7.500.000', 
      desc: 'Gerbang atau pintu utama mewah berukir penuh khas Bali dengan material kayu jati tua.',
      detail: 'Karya agung seni ukir tingkat tinggi yang memberikan kesan megah dan berwibawa pada fasad rumah atau villa.',
      netto: 'Custom / Sesuai Ukuran',
      img: './relief2.png' 
    },
    {
      id: 6, 
      nama: 'Jendela Ukiran Bali', 
      harga: 'Rp 1.800.000', 
      desc: 'Jendela kayu berukir estetis yang memadukan sirkulasi udara optimal dan keindahan seni.',
      detail: 'Dibuat dari kayu jati pilihan dengan detail ukiran tembus pandang atau panel tertutup yang kokoh.',
      netto: 'Per Unit / Set',
      img: './ukirproduk1.png' 
    }
  ];

  return (
    <div className="page-container">
      <nav className="navbar">
        {/* Logo bersih tanpa teks double */}
        <Link to="/" className="logo-link">
          <img 
            src="./LogoGupta.png" 
            alt="Gupta Bali Ukir D'Bali" 
            className="logo-img" 
            style={{ height: '42px', width: 'auto', display: 'block' }}
          />
        </Link>
        
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-active" : ""}>
              Beranda
            </NavLink>
          </li>
          
          <li className="dropdown">
            <NavLink to="/produk" className={({ isActive }) => isActive ? "nav-active" : ""}>
              Produk ▾
            </NavLink>
            <ul className="dropdown-menu">
              <li><Link to="/produk">Semua Produk</Link></li>
              <li><Link to="/produk-relief">Relief</Link></li>
              <li><Link to="/produk-loster">Loster</Link></li>
              <li><Link to="/produk-patung">Patung</Link></li>
              <li><Link to="/produk-ornamen">Ornamen Ukiran Bali</Link></li>
            </ul>
          </li>

          <li>
            <NavLink to="/tentang" className={({ isActive }) => isActive ? "nav-active" : ""}>
              Tentang Kami
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="content-wrapper" style={{ paddingBottom: '60px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#d4af37', fontFamily: 'serif', fontSize: '2.5rem', fontWeight: 'normal' }}>
          Produk & Koleksi Ukiran Bali
        </h1>
        
        <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          {listProduk.map((item) => (
            <div key={item.id} className="card" style={{ padding: '24px', textAlign: 'left', backgroundColor: '#141414', border: '1px solid #262626', borderRadius: '16px', display: 'flex', flexDirection: 'column', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
              
              {/* Gambar Diperbarui dengan objectFit: 'contain' agar tampil utuh tanpa terpotong */}
              <img 
                src={item.img} 
                alt={item.nama} 
                className="card-img" 
                style={{ 
                  height: '240px', 
                  width: '100%', 
                  objectFit: 'contain', 
                  borderRadius: '10px', 
                  marginBottom: '15px', 
                  backgroundColor: '#161616',
                  padding: '10px'
                }} 
              />

              <h3 style={{ color: '#d4af37', fontFamily: 'serif', fontSize: '1.25rem', marginBottom: '10px', fontWeight: 'normal' }}>{item.nama}</h3>
              <p style={{ fontSize: '0.95rem', color: '#b0b0b0', margin: '0 0 15px 0', lineHeight: '1.5' }}>{item.desc}</p>
              
              <div style={{ fontSize: '0.88rem', color: '#d0d0d0', background: '#1c1c1c', padding: '14px', borderRadius: '10px', marginBottom: '20px', border: '1px solid #2a2a2a' }}>
                <p style={{ marginBottom: '6px', lineHeight: '1.4' }}><strong style={{ color: '#ffffff' }}>Detail:</strong> {item.detail}</p>
                <p style={{ margin: '0', lineHeight: '1.4' }}><strong style={{ color: '#ffffff' }}>Kategori/Ukuran:</strong> {item.netto}</p>
              </div>

              <p className="price" style={{ fontSize: '1.35rem', fontWeight: '600', color: '#ffffff', marginBottom: '20px' }}>{item.harga}</p>
              
              <button 
                className="wa-btn" 
                onClick={() => window.open(`https://wa.me/628135988482?text=Halo%20Gupta%20Bali%20Ukir,%20saya%20mau%20pesan%20${encodeURIComponent(item.nama)}`)}
                style={{ backgroundColor: '#25D366', color: '#ffffff', border: 'none', borderRadius: '8px', padding: '12px 20px', fontWeight: '600', cursor: 'pointer', width: '100%', marginTop: 'auto', transition: 'opacity 0.2s' }}
              >
                Pesan Via Whatsapp
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Interaktif */}
      <footer className="footer-section" style={{ width: '100%', backgroundColor: '#141414', borderTop: '1px solid #262626', padding: '60px 20px 20px' }}>
        <div className="footer-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="footer-grid">
            
            {/* Kolom 1: Brand & Maps */}
            <div className="footer-col">
              <h3 className="footer-brand-title" style={{ color: '#d4af37', fontSize: '1.4rem', marginBottom: '10px' }}>
                Gupta Bali Ukir D'Bali
              </h3>
              <p className="footer-brand-desc" style={{ marginBottom: '15px', color: '#b0b0b0', lineHeight: '1.6' }}>
                Membawa keindahan seni ukir Bali dan kualitas terbaik untuk Anda.
              </p>
              <a 
                href="https://maps.app.goo.gl/Afq6xVDRVUz4x8zJ6" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#1c1c1c',
                  color: '#d4af37',
                  border: '1px solid #d4af37',
                  padding: '8px 14px',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}
              >
                📍 Buka Lokasi di Google Maps
              </a>
            </div>

            {/* Kolom 2: Tautan Cepat */}
            <div className="footer-col">
              <h4 className="footer-col-title" style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '15px' }}>
                Tautan Cepat
              </h4>
              <ul className="footer-links" style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '8px' }}><Link to="/tentang" style={{ color: '#b0b0b0', textDecoration: 'none' }}>Tentang Kami</Link></li>
                <li style={{ marginBottom: '8px' }}><Link to="/produk" style={{ color: '#b0b0b0', textDecoration: 'none' }}>Koleksi & Produk</Link></li>
              </ul>
            </div>

            {/* Kolom 3: Kontak Interaktif */}
            <div className="footer-col">
              <h4 className="footer-col-title" style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '15px' }}>
                Kontak
              </h4>
              <p className="footer-contact-text" style={{ color: '#b0b0b0', fontSize: '0.9rem', marginBottom: '10px', lineHeight: '1.5' }}>
                Br. Dinas Jakatebel Desa Tangguntiti Kec. Selemadeg Timur Kab. Tabanan, Bali.
              </p>

              <p className="footer-contact-text" style={{ marginBottom: '8px' }}>
                <a 
                  href="https://wa.me/6285857121893?text=Halo%20Gupta%20Bali%20Ukir,%20saya%20ingin%20bertanya%20mengenai%20produk." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#4ade80', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: '500' }}
                >
                  💬 +62 858-5712-1893 (WhatsApp)
                </a>
              </p>

              <p className="footer-contact-text" style={{ marginBottom: '8px' }}>
                <a 
                  href="https://wa.me/6285100299662?text=Halo%20Gupta%20Bali%20Ukir,%20saya%20ingin%20bertanya%20mengenai%20produk." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#4ade80', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: '500' }}
                >
                  💬 +62 851-0029-9662 (WhatsApp)
                </a>
              </p>

              <p className="footer-contact-text" style={{ marginBottom: '8px' }}>
                <a 
                  href="mailto:info@guptabaliukir.com" 
                  style={{ color: '#60a5fa', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: '500' }}
                >
                  ✉️ info@guptabaliukir.com
                </a>
              </p>

              <p className="footer-contact-text" style={{ color: '#b0b0b0' }}>
                Facebook: <a href="https://www.facebook.com/jenny.jadu/#" target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: '500' }}>Gupta Bali Ukir</a>
              </p>
            </div>

          </div>

          <div className="footer-bottom" style={{ borderTop: '1px solid #202020', marginTop: '40px', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', color: '#888', fontSize: '0.85rem' }}>
            <p>© 2026 Gupta Bali Ukir D'Bali. All rights reserved.</p>
            <p className="footer-credit">Created by <span className="footer-credit-brand" style={{ color: '#d4af37', fontWeight: '600' }}>yandika_dafa</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Produk;
