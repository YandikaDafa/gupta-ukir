import '../App.css';
import { Link, NavLink } from 'react-router-dom';

function ProdukLoster() {
  const daftarLoster = [
    { 
      id: 1, 
      judul: 'Loster Ukir Klasik Bali', 
      desc: 'Ventilasi atau lubang angin berukir estetik untuk sirkulasi udara rumah yang elegan.', 
      detail: 'Cocok dipasang pada dinding rumah, villa, atau bangunan tradisional untuk menambah nilai estetika.',
      kategori: 'Per Unit',
      harga: 'Rp 150.000',
      img: './relief2.png' 
    },
    { 
      id: 2, 
      judul: 'Loster Motif Flora Kayu Jati', 
      desc: 'Lubang angin dengan pahatan motif dedaunan khas Bali yang rapi dan detail.', 
      detail: 'Dibuat dari bahan kayu jati pilihan yang tahan terhadap cuaca luar ruangan.',
      kategori: 'Per Unit',
      harga: 'Rp 175.000',
      img: './ukirproduk1.png' 
    },
    { 
      id: 3, 
      judul: 'Loster Geometris Tradisional', 
      desc: 'Kombinasi ornamen tradisional dan rongga udara optimal untuk kesejukan ruangan.', 
      detail: 'Pahatan tangan pengrajin profesional asal Tabanan dengan hasil akhir yang halus.',
      kategori: 'Per Unit / Set',
      harga: 'Rp 200.000',
      img: './relief1.png' 
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
          Produk Loster Ukiran Bali
        </h1>
      </header>

      {/* Grid Produk */}
      <section className="koleksi-section" style={{ padding: '20px 20px 60px' }}>
        <div className="koleksi-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          {daftarLoster.map((item) => (
            <div key={item.id} className="koleksi-card" style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                {/* Kotak Gambar dengan objectFit: 'contain' agar tampil utuh */}
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

export default ProdukLoster;