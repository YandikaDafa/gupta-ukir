import '../App.css';
import { Link, NavLink } from 'react-router-dom';

function ProdukPatung() {
  const daftarPatung = [
    { 
      id: 1, 
      judul: 'Patung Bolo-bolo polos', 
      desc: 'Lambang ilmu pengetahuan dan seni, dipahat secara detail menggunakan kayu pilihan dengan ukuran 80cm.', 
      detail: 'Dikerjakan secara detail oleh perajin berpengalaman menggunakan kayu pilihan terbaik yang awet dan tahan lama.',
      kategori: 'Sepasang (2 Pcs)',
      harga: 'Rp 700.000',
      img: './bolobolo.png' 
    },
    { 
      id: 2, 
      judul: 'Brahma Wisnu Cat cream dan Prada 1 set', 
      desc: 'Ornamen penjaga gerbang khas Bali yang memberikan kesan megah dan sakral pada pintu masuk hunian dengan tinggi 80cm.', 
      detail: 'Cocok dipasang di gerbang utama rumah, villa, atau pura untuk memberikan perlindungan dan estetika tradisional.',
      kategori: 'Sepasang (2 Pcs)',
      harga: 'Rp 900.000',
      img: './patungbg.png' 
    },
    { 
      id: 3, 
      judul: 'Brahma Wisnu ', 
      desc: 'Kombinasi seni patung timbul dengan cerita epik pewayangan tradisional Bali.', 
      detail: 'Karya ukiran tiga dimensi dengan detail cerita klasik Bali yang sarat akan nilai seni tinggi.',
      kategori: 'Custom / 1 Set',
      harga: 'Rp 1.100.000',
      img: './brahmawisnu.png' 
    },
    { 
      id: 4, 
      judul: 'Patung Jangger Polos', 
      desc: 'Karya seni ukir patung yang menghadirkan suasana tenang, damai, dan estetis untuk sudut interior.', 
      detail: 'Dipahat dengan penuh ketenangan, sangat ideal untuk menghiasi Sudut Rumah.',
      kategori: '1 Set (2 Pcs)',
      harga: 'Rp 700.000',
      img: './janggerpolos.png' 
    },
    { 
      id: 5, 
      judul: 'Patung Jangger Cat', 
      desc: 'Karya seni ukir patung yang menghadirkan suasana tenang, damai, dan estetis untuk sudut interior.', 
      detail: 'Dipahat dengan penuh ketenangan, sangat ideal untuk menghiasi Sudut Rumah.',
      kategori: '1 Set (2 Pcs)',
      harga: 'Rp 1.200.000',
      img: './janggercat.png' 
    },
    { 
      id: 6, 
      judul: 'Patung Ganesha Kecil', 
      desc: 'Kombinasi seni patung timbul dengan cerita epik pewayangan tradisional Bali dengan ukuran 50cm.', 
      detail: 'Karya ukiran tiga dimensi dengan detail cerita klasik Bali yang sarat akan nilai seni tinggi.',
      kategori: 'Custom / Per Set',
      harga: 'Rp 400.000',
      img: './ganeshakecil.png' 
    },
    { 
      id: 7, 
      judul: 'Patung Ganesha Besar', 
      desc: 'Lambang ilmu pengetahuan dan seni, dipahat secara detail menggunakan kayu pilihan dengan ukuran 70cm.', 
      detail: 'Dikerjakan secara detail oleh perajin berpengalaman menggunakan kayu pilihan terbaik yang awet dan tahan lama.',
      kategori: 'Perset',
      harga: 'Rp 650.000',
      img: './ganeshabesar.png' 
    },
    { 
      id: 8, 
      judul: 'Patung Nyunjun 1 set', 
      desc: 'Ornamen penjaga gerbang khas Bali yang memberikan kesan megah dan sakral pada pintu masuk hunian.', 
      detail: 'Cocok dipasang di gerbang utama rumah, villa, atau pura untuk memberikan perlindungan dan estetika tradisional dengan tinggi 70cm.',
      kategori: 'Sepasang (2 Pcs)',
      harga: 'Rp 500.000',
      img: './nyunjun.png'  
    },
    { 
      id: 9, 
      judul: 'Patung Nyunjun 1pcs', 
      desc: 'Karya seni ukir patung yang menghadirkan suasana tenang, damai, dan estetis untuk sudut interior tinggi 90cm.', 
      detail: 'Dipahat dengan penuh ketenangan, sangat ideal untuk menghiasi Sudut Rumah.',
      kategori: 'Per Unit',
      harga: 'Rp 800.000',
      img: './nyunjun1pcs.png' 
    },
    { 
      id: 10, 
      judul: 'Singa Sungsang Polos Tinggi 80 ', 
      desc: 'Kombinasi seni patung timbul dengan cerita epik pewayangan tradisional Bali.', 
      detail: 'Karya ukiran tiga dimensi dengan detail cerita klasik Bali yang sarat akan nilai seni tinggi.',
      kategori: 'Custom / 1 Set',
      harga: 'Rp 700.000',
      img: './brahmawisnu.png' 
    },
    { 
      id: 11, 
      judul: 'Patung Jangger', 
      desc: 'Karya seni ukir patung yang menghadirkan suasana tenang, damai, dan estetis untuk sudut interior.', 
      detail: 'Dipahat dengan penuh ketenangan, sangat ideal untuk menghiasi Sudut Rumah.',
      kategori: 'Per Unit',
      harga: 'Rp 1.200.000',
      img: './patungjangger.png' 
    },
    { 
      id: 12, 
      judul: 'Patung Relief Kayu Tradisional', 
      desc: 'Kombinasi seni patung timbul dengan cerita epik pewayangan tradisional Bali.', 
      detail: 'Karya ukiran tiga dimensi dengan detail cerita klasik Bali yang sarat akan nilai seni tinggi.',
      kategori: 'Custom / Per Set',
      harga: 'Rp 4.000.000',
      img: './relief1.png' 
    },
    { 
      id: 13, 
      judul: 'Patung f Kayu Tradisional', 
      desc: 'Kombinasi seni patung timbul dengan cerita epik pewayangan tradisional Bali.', 
      detail: 'Karya ukiran tiga dimensi dengan detail cerita klasik Bali yang sarat akan nilai seni tinggi.',
      kategori: 'Custom / Per Set',
      harga: 'Rp 4.000.000',
      img: './relief1.png' 
    }
  ];

  return (
    <div className="container" style={{ backgroundColor: '#121212', minHeight: '100vh', color: '#fff', width: '100%', overflowX: 'hidden' }}>
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

      {/* Header Halaman Patung */}
      <header style={{ textAlign: 'center', padding: '60px 20px 40px', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ color: '#d4af37', fontSize: '2.8rem', fontFamily: 'serif', marginBottom: '15px' }}>
          Koleksi Patung Kayu Bali
        </h1>
        <p style={{ color: '#cccccc', fontSize: '1.1rem', lineHeight: '1.6' }}>
          Mahakarya seni pahat patung tradisional Bali hasil karya tangan perajin berpengalaman di Tabanan, memberikan nilai estetika tinggi dan sakral untuk interior maupun eksterior bangunan Anda.
        </p>
      </header>

      {/* Grid Produk Patung */}
      <section style={{ width: '100%', backgroundColor: '#181818', padding: '60px 20px', borderTop: '1px solid #262626', borderBottom: '1px solid #262626' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="koleksi-grid">
            {daftarPatung.map((item) => (
              <div key={item.id} className="koleksi-card" style={{ backgroundColor: '#202020', border: '1px solid #2d2d2d', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <img src={item.img} alt={item.judul} className="koleksi-img" />
                  <div className="koleksi-body">
                    <h3 className="koleksi-title" style={{ color: '#d4af37' }}>{item.judul}</h3>
                    <p className="koleksi-desc" style={{ color: '#b0b0b0', marginBottom: '15px' }}>{item.desc}</p>
                    
                    {/* Kotak Detail & Kategori selaras dengan halaman Relief */}
                    <div style={{ backgroundColor: '#181818', border: '1px solid #2c2c2c', borderRadius: '6px', padding: '12px', fontSize: '0.85rem', marginBottom: '20px', color: '#cccccc' }}>
                      <p style={{ marginBottom: '6px', lineHeight: '1.4' }}>
                        <strong style={{ color: '#ffffff' }}>Detail:</strong> {item.detail}
                      </p>
                      <p style={{ lineHeight: '1.4' }}>
                        <strong style={{ color: '#ffffff' }}>Kategori/Ukuran:</strong> {item.kategori}
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{ padding: '0 24px 24px 24px' }}>
                  <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#ffffff', marginBottom: '15px' }}>
                    {item.harga}
                  </div>
                  <button 
                    onClick={() => window.open(`https://wa.me/6285857121893?text=Halo%20Gupta%20Bali%20Ukir,%20saya%20tertarik%20dengan%20produk%20patung:%20${encodeURIComponent(item.judul)}`)}
                    style={{
                      backgroundColor: '#22c55e',
                      color: '#ffffff',
                      border: 'none',
                      padding: '12px 16px',
                      borderRadius: '6px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      width: '100%',
                      transition: 'background 0.2s'
                    }}
                  >
                    Pesan Melalui Whatsapp
                  </button>
                </div>
              </div>
            ))}
          </div>
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
                <li style={{ marginBottom: '8px' }}><Link to="/produk-patung" style={{ color: '#b0b0b0', textDecoration: 'none' }}>Patung Bali</Link></li>
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

export default ProdukPatung;