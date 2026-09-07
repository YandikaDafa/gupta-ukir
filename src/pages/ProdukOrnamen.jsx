import '../App.css';
import { Link, NavLink } from 'react-router-dom';

function ProdukOrnamen() {
  const daftarOrnamen = [
    { 
      id: 1, 
      judul: 'Menur Gajah Size 25x25cm ', 
      desc: 'Ornamen ukiran khas tradisional Bali untuk pelengkap bangunan dan arsitektur.', 
      detail: 'Dipahat langsung dengan tangan (handmade) mencerminkan kekayaan seni ukir tradisional asal Tabanan.',
      kategori: 'Per Pcs / Set',
      harga: 'Rp 250.000',
      img: './menurgajah25.png' 
    },
    { 
      id: 2, 
      judul: 'Menur Gajah Size 20x20cm', 
      desc: 'Pahatan pemucu sudut atau bingkai sudut dengan detail ukiran klasik yang artistik.', 
      detail: 'Cocok digunakan sebagai penghias sudut bangunan, pintu, atau gebyok khas Bali agar tampak lebih megah.',
      kategori: 'Per Pcs / Pasang',
      harga: 'Rp 200.000',
      img: './menurgajah20.png' 
    },
    { 
      id: 3, 
      judul: 'Menur Gajah Size 30x30cm', 
      desc: 'Paket kombinasi ornamen menur dan pemucu untuk dekorasi arsitektur rumah dan pura.', 
      detail: 'Menggunakan bahan kayu pilihan berkualitas tinggi yang tahan lama serta mudah dipasang.',
      kategori: 'Per Set Lengkap',
      harga: 'Rp 350.000',
      img: './menurgajah30.png' 
    },
    { 
      id: 4, 
      judul: 'Swastika Gajah Size 25X40cm', 
      desc: 'Ornamen ukiran khas tradisional Bali untuk pelengkap bangunan dan arsitektur.', 
      detail: 'Dipahat langsung dengan tangan (handmade) mencerminkan kekayaan seni ukir tradisional asal Tabanan.',
      kategori: 'Per Pcs / Set',
      harga: 'Rp 350.000',
      img: './swastikagajah.png' 
    },
    { 
      id: 5, 
      judul: 'Menur Polos Size 25x25cm', 
      desc: 'Pahatan pemucu sudut atau bingkai sudut dengan detail ukiran klasik yang artistik.', 
      detail: 'Cocok digunakan sebagai penghias sudut bangunan, pintu, atau gebyok khas Bali agar tampak lebih megah.',
      kategori: 'Per Pcs / Pasang',
      harga: 'Rp 100.000',
      img: './menurpolos.png' 
    },
    { 
      id: 6, 
      judul: 'Menur Kotak Size 25x25cm', 
      desc: 'Paket kombinasi ornamen menur dan pemucu untuk dekorasi arsitektur rumah dan pura.', 
      detail: 'Menggunakan bahan kayu pilihan berkualitas tinggi yang tahan lama serta mudah dipasang.',
      kategori: 'Per Set Lengkap',
      harga: 'Rp 150.000',
      img: './menurkotak.png' 
    },
    { 
      id: 7, 
      judul: 'Menur Fiber Size 25x25cm', 
      desc: 'Ornamen ukiran khas tradisional Bali untuk pelengkap bangunan dan arsitektur.', 
      detail: 'Dipahat langsung dengan tangan (handmade) mencerminkan kekayaan seni ukir tradisional asal Tabanan.',
      kategori: 'Per Pcs / Set',
      harga: 'Rp 500.000',
      img: './menurfiber25.png' 
    },
    { 
      id: 8, 
      judul: 'Menur Fiber Size 40x40cm', 
      desc: 'Pahatan pemucu sudut atau bingkai sudut dengan detail ukiran klasik yang artistik.', 
      detail: 'Cocok digunakan sebagai penghias sudut bangunan, pintu, atau gebyok khas Bali agar tampak lebih megah.',
      kategori: 'Per Pcs / Pasang',
      harga: 'Rp 1.100.000',
      img: './menurfiber40.png' 
    },
    { 
      id: 9, 
      judul: 'Menur Fiber Size 30x30cm', 
      desc: 'Paket kombinasi ornamen menur dan pemucu untuk dekorasi arsitektur rumah dan pura.', 
      detail: 'Menggunakan bahan kayu pilihan berkualitas tinggi yang tahan lama serta mudah dipasang.',
      kategori: 'Per Set Lengkap',
      harga: 'Rp 700.000',
      img: './menurfiber30.png' 
    },
    { 
      id: 10, 
      judul: 'Menur Beton Size 20x20cm', 
      desc: 'Ornamen ukiran khas tradisional Bali untuk pelengkap bangunan dan arsitektur.', 
      detail: 'Dipahat langsung dengan tangan (handmade) mencerminkan kekayaan seni ukir tradisional asal Tabanan.',
      kategori: 'Per Pcs / Set',
      harga: 'Rp 350.000',
      img: './menurbeton20.png' 
    },
    { 
      id: 11, 
      judul: 'Menur Beton Size 22x22cm', 
      desc: 'Pahatan pemucu sudut atau bingkai sudut dengan detail ukiran klasik yang artistik.', 
      detail: 'Cocok digunakan sebagai penghias sudut bangunan, pintu, atau gebyok khas Bali agar tampak lebih megah.',
      kategori: 'Per Pcs / Pasang',
      harga: 'Rp 275.000',
      img: './menurbeton22.png' 
    },
    { 
      id: 12, 
      judul: 'Menur Beton Size 25x25cm', 
      desc: 'Paket kombinasi ornamen menur dan pemucu untuk dekorasi arsitektur rumah dan pura.', 
      detail: 'Menggunakan bahan kayu pilihan berkualitas tinggi yang tahan lama serta mudah dipasang.',
      kategori: 'Per Set Lengkap',
      harga: 'Rp 600.000',
      img: './menurbeton25.png' 
    },
    { 
      id: 13, 
      judul: 'Menur Beton Size 30x30cm', 
      desc: 'Paket kombinasi ornamen menur dan pemucu untuk dekorasi arsitektur rumah dan pura.', 
      detail: 'Menggunakan bahan kayu pilihan berkualitas tinggi yang tahan lama serta mudah dipasang.',
      kategori: 'Per Set Lengkap',
      harga: 'Rp 600.000',
      img: './menurbeton30.png' 
    },
    { 
      id: 14, 
      judul: 'Pemucu Beton Size 70x30cm', 
      desc: 'Paket kombinasi ornamen menur dan pemucu untuk dekorasi arsitektur rumah dan pura.', 
      detail: 'Menggunakan bahan kayu pilihan berkualitas tinggi yang tahan lama serta mudah dipasang.',
      kategori: 'Per Set Lengkap',
      harga: 'Rp 100.000',
      img: './pemucubeton70.png' 
    }
  ];

  return (
    <div className="container" style={{ backgroundColor: '#121212', minHeight: '100vh', color: '#fff' }}>
      {/* Navbar */}
      <nav className="navbar">
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

      {/* Header Katalog */}
      <header style={{ textAlign: 'center', padding: '40px 20px 20px' }}>
        <h1 style={{ color: '#d4af37', fontFamily: 'serif', fontSize: '2.5rem', fontWeight: 'normal', letterSpacing: '1px' }}>
          Ornamen Ukiran Bali (Menur & Pemucu)
        </h1>
      </header>

      {/* Grid Produk */}
      <section className="koleksi-section" style={{ padding: '20px 20px 60px' }}>
        <div className="koleksi-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          {daftarOrnamen.map((item) => (
            <div key={item.id} className="koleksi-card" style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                {/* Pembungkus gambar dengan objectFit: 'contain' agar gambar tampil utuh */}
                <div style={{ width: '100%', height: '220px', backgroundColor: '#161616', borderRadius: '8px', overflow: 'hidden', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
                  <img src={item.img} alt={item.judul} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <h3 style={{ color: '#d4af37', fontSize: '1.25rem', marginBottom: '8px' }}>{item.judul}</h3>
                <p style={{ color: '#b0b0b0', fontSize: '0.9rem', marginBottom: '15px', lineHeight: '1.4' }}>{item.desc}</p>
                
                {/* Kotak Detail & Kategori */}
                <div style={{ backgroundColor: '#121212', border: '1px solid #262626', borderRadius: '8px', padding: '12px', marginBottom: '20px', fontSize: '0.85rem' }}>
                  <p style={{ color: '#cccccc', marginBottom: '8px', lineHeight: '1.4' }}>
                    <strong style={{ color: '#fff' }}>Detail:</strong> {item.detail}
                  </p>
                  <p style={{ color: '#cccccc', margin: 0 }}>
                    <strong style={{ color: '#fff' }}>Kategori/Ukuran:</strong> {item.kategori}
                  </p>
                </div>
              </div>

              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '15px' }}>
                  {item.harga}
                </div>
                <button 
                  onClick={() => window.open(`https://wa.me/628135988482?text=Halo%20Gupta%20Bali%20Ukir,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(item.judul)}`)}
                  style={{ 
                    backgroundColor: '#25D366', 
                    color: '#000000', 
                    border: 'none', 
                    padding: '12px 15px', 
                    borderRadius: '8px', 
                    fontWeight: 'bold', 
                    cursor: 'pointer', 
                    width: '100%',
                    fontSize: '0.95rem',
                    transition: 'opacity 0.2s'
                  }}
                  onMouseOver={(e) => e.target.style.opacity = '0.9'}
                  onMouseOut={(e) => e.target.style.opacity = '1'}
                >
                  Pesan Melalui Whatsapp
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bagian Footer */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Kolom 1: Brand, Deskripsi, & Google Maps */}
            <div className="footer-col">
              <h3 className="footer-brand-title">Gupta Bali Ukir D'Bali</h3>
              <p className="footer-brand-desc" style={{ marginBottom: '15px' }}>
                Membawa keindahan seni ukir Bali dan kualitas terbaik untuk Anda.
              </p>
              {/* Tombol Tautan Google Maps */}
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
                  fontWeight: '500',
                  transition: 'background 0.2s'
                }}
              >
                📍 Buka Lokasi di Google Maps
              </a>
            </div>

            {/* Kolom 2: Tautan Cepat */}
            <div className="footer-col">
              <h4 className="footer-col-title">Tautan Cepat</h4>
              <ul className="footer-links">
                <li><Link to="/tentang">Tentang Kami</Link></li>
                <li><Link to="/produk">Koleksi & Produk</Link></li>
                <li><Link to="/kontak">Kontak Kami</Link></li>
              </ul>
            </div>

            {/* Kolom 3: Kontak */}
            <div className="footer-col">
              <h4 className="footer-col-title">Kontak</h4>
              <p className="footer-contact-text">Br. Dinas Jakatebel Desa Tangguntiti Kec. Selemadeg Timur Kab. Tabanan, Bali.</p>
              <p className="footer-contact-text">+62 813-5988-482</p>
              <p className="footer-contact-text">info@guptabaliukir.com</p>
              <p className="footer-contact-text">
                Facebook: <a href="https://www.facebook.com/jenny.jadu/#" target="_blank" rel="noopener noreferrer" className="footer-social-link">Gupta Bali Ukir</a>
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 Gupta Bali Ukir D'Bali. All rights reserved.</p>
            <p className="footer-credit">Created by <span className="footer-credit-brand">yandika_dafa</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ProdukOrnamen;
