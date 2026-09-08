import '../App.css';
import { Link, NavLink } from 'react-router-dom';

function ProdukRelief() {
  const daftarRelief = [
    { 
      id: 1, 
      judul: 'Relief Ukir Flora', 
      desc: 'Ukiran dinding artistik dengan motif flora khas Bali.', 
      detail: 'Cocok dipasang pada dinding rumah, villa, atau bangunan pura untuk menambah nilai estetika arsitektur tradisional.',
      kategori: 'Custom / 1pcs',
      harga: 'Rp 1.300.000',
      img: './reliefflora.png' 
    },
    { 
      id: 2, 
      judul: 'Relief Cerita Ramayana', 
      desc: 'Hadirkan keindahan dan filosofi epos klasik nusantara ke dalam ruangan Anda melalui Panel Relief Kayu "Rama & Sinta di Hutan Suci".', 
      detail: 'Hiasan dinding interior, koleksi seni budaya, dekorasi ruang bergaya etnik/resort.',
      kategori: '1pcs',
      harga: 'Rp 1.500.000',
      img: './relieframasinta.png' 
    },
    { 
      id: 3, 
      judul: 'Ramayana Wooden Relief', 
      desc: 'Karya seni pahat tiga dimensi (3D) berukuran vertikal ini menggambarkan adegan dramatis saat Sang Rama bersiap dengan busurnya di tengah hutan lebat yang rindang.',
      detail: 'Panel vertikal ini sangat ideal dipasang sebagai focal point di dinding ruang tamu, koridor galeri, pilar rumah mewah, maupun hotel dan vila berkonsep etnik nusantara.',
      kategori: 'Custom / 1pcs',
      harga: 'Rp 500.000',
      img: './ramayana.png' 
    },
    { 
      id: 4, 
      judul: 'Panel Ukiran Patra Punggel Size 10x90cm', 
      desc: 'Motif patra punggel dikenal dengan garis lengkung spiralnya yang mengalir dinamis, melambangkan keharmonisan dan dinamika alam.', 
      detail: 'Dibuat dengan teknik ukir tangan (hand-carved) penuh ketelitian oleh pengrajin lokal Bali, panel ini memiliki kedalaman relief 3D yang sangat elegan dengan latar bertekstur khas.',
      kategori: 'Per Pcs',
      harga: 'Rp 90.000',
      img: './patrapunggel.png' 
    },
    { 
      id: 5, 
      judul: 'Ornamen Kayu Motif Patra Punggel', 
      desc: 'Terdiri dari panel-panel vertikal dengan motif ukiran daun melingkar (patra punggel) yang simetris dan mengalir dinamis, menciptakan kesan elegan serta artistik.', 
      detail: 'Dibuat secara manual oleh pengrajin ukir tangan (hand-carved) profesional dengan tingkat presisi yang tinggi, produk ini sangat cocok digunakan sebagai pelapis pilar/tiang rumah, dekorasi lobi hotel, restoran, maupun galeri seni berkonsep etnik tropis.',
      kategori: 'Per Pcs',
      harga: 'Rp 50.000',
      img: './motifpatrapunggel.png' 
    },
    { 
      id: 6, 
      judul: 'Balinese Carved Pillar Panel', 
      desc: 'Terbuat dari kayu pilihan berkualitas tinggi, set panel ini menampilkan keindahan ukiran tangan tradisional khas Bali dengan pola daun melingkar yang mengalir dinamis dan simetris.', 
      detail: 'Dikerjakan sepenuhnya oleh pengrajin lokal berpengalaman, setiap detail ukiran 3D dipahat dengan presisi tinggi untuk menghadirkan kesan mewah, elegan, dan etnik. Sangat ideal diaplikasikan sebagai pelapis pilar/tiang bangunan, dekorasi sudut ruangan, pilar lobi hotel, restoran, maupun hunian bergaya tropis modern.',
      kategori: '1 Pcs',
      harga: 'Rp 65.000',
      img: './balinesecarved.png' 
    },
    { 
      id: 7, 
      judul: 'Panel Ornamen Kayu Motif Patra Punggel Vertikal Size 50x100cm', 
      desc: 'Perkaya detail arsitektur klasik Bali pada bangunan Anda dengan Panel Ornamen Kayu Motif Patra Punggel Vertikal.', 
      detail: 'Sangat ideal diaplikasikan sebagai pelapis pilar/tiang vertikal, dekorasi sudut dinding, hiasan pintu, maupun elemen estetika untuk rumah, vila, dan resor berkonsep etnik tropis.',
      kategori: 'Custom / 1pcs',
      harga: 'Rp 500.000',
      img: './ornamenpatrapunggel.png' 
    },
    { 
      id: 8, 
      judul: 'Panel Relief Kayu Ikan Koi & Bunga Teratai Size 60x100cm', 
      desc: 'Hadirkan simbol kemakmuran, keberuntungan, dan ketenangan alam ke dalam hunian Anda melalui Panel Relief Kayu "Ikan Koi & Bunga Teratai".', 
      detail: 'Sangat ideal dipasang sebagai focal point atau hiasan dinding eksklusif di ruang tamu, ruang keluarga, lobi hotel, restoran, maupun kolam renang indoor berkonsep etnik dan natural.',
      kategori: '1pcs',
      harga: 'Rp 600.000',
      img: './reliefkoi.png' 
    },
    { 
      id: 9, 
      judul: 'Panel Relief Kayu Burung Bangau di Kolam Teratai Size 60x100cm', 
      desc: 'Hadirkan suasana alam pedesaan Bali yang tenang, asri, dan penuh kedamaian ke dalam ruangan Anda melalui Panel Relief Kayu "Burung Bangau di Kolam Teratai".',
      detail: 'Dikerjakan secara manual (hand-carved) penuh ketelitian oleh pengrajin ukir kayu lokal Bali yang berpengalaman, menghasilkan detail relief yang sangat hidup dan artistik.',
      kategori: 'Custom / 1pcs',
      harga: 'Rp 600.000',
      img: './burungbangau.png' 
    },
    { 
      id: 10, 
      judul: 'Panel Relief Kayu Dewa Kresna Size 60x100cm ', 
      desc: 'Hadirkan nuansa spiritual yang sakral dan estetika seni klasik yang tinggi ke dalam ruangan Anda melalui Panel Relief Kayu Dewa Kresna Menyayikan Seruling', 
      detail: 'Dibuat dengan teknik ukir tangan (hand-carved) penuh ketelitian oleh pengrajin lokal Bali, panel ini memiliki kedalaman relief 3D yang sangat elegan dengan latar bertekstur khas.',
      kategori: 'Per Pcs',
      harga: 'Rp 600.000',
      img: './dewakresna.png' 
    },
    { 
      id: 11, 
      judul: 'Panel Relief Kayu Burung Bangau & Kolam Teratai Dinamis Size 50x100cm', 
      desc: 'Hadirkan dinamika kehidupan alam liar yang elegan ke dalam interior Anda melalui Panel Relief Kayu "Burung Bangau & Kolam Teratai Dinamis".', 
      detail: 'Sangat cocok dipasang sebagai hiasan dinding eksklusif atau focal point di ruang tamu, ruang keluarga, lobi hotel, resor, maupun ruang makan yang mengusung tema alam dan estetika etnik tropis.',
      kategori: 'Per Pcs',
      harga: 'Rp 500.000',
      img: './burungbangaukolamteratai.png' 
    },
    { 
      id: 12, 
      judul: 'Balinese Carved Pillar Panel Size 50x100cm', 
      desc: 'Terbuat dari kayu pilihan berkualitas tinggi, set panel ini menampilkan keindahan ukiran tangan tradisional khas Bali dengan pola daun melingkar yang mengalir dinamis dan simetris.', 
      detail: 'Dikerjakan sepenuhnya oleh pengrajin lokal berpengalaman, setiap detail ukiran 3D dipahat dengan presisi tinggi untuk menghadirkan kesan mewah, elegan, dan etnik. Sangat ideal diaplikasikan sebagai pelapis pilar/tiang bangunan, dekorasi sudut ruangan, pilar lobi hotel, restoran, maupun hunian bergaya tropis modern.',
      kategori: 'Per Pcs',
      harga: 'Rp 500.000',
      img: './balinesecarved.png' 
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
          Produk Relief Ukiran Bali
        </h1>
      </header>

      {/* Grid Produk */}
      <section className="koleksi-section" style={{ padding: '20px 20px 60px' }}>
        <div className="koleksi-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          {daftarRelief.map((item) => (
            <div key={item.id} className="koleksi-card" style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                {/* Pembungkus gambar disesuaikan dengan objectFit: 'contain' */}
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

export default ProdukRelief;
