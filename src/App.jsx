import './App.css';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function App() {
  const [openFaq, setOpenFaq] = useState(0);

  const koleksiUnggulan = [
    { id: 1, judul: 'Ukiran Klasik', desc: 'Sentuhan kemewahan seni pahat untuk keindahan kebutuhan rumah anda.', img: './reliefunggulan1.png' },
    { id: 2, judul: 'Loster Estetik', desc: 'Sirkulasi udara alami berpadu dengan ornamen estetis khas tradisional Bali.', img: './losterunggulan2.png' },
    { id: 3, judul: 'Ikut Celedu', desc: 'Detail pahatan tangan yang artistik menghidupkan nuansa khas Bali.', img: './ikutceleduunggulan3.png' },
    { id: 4, judul: 'Patung Brahma Wisnu 1 Set', desc: 'Sentuhan kemewahan seni pahat dengan tinggi 80cm, cat antik prada.', img: './patungunggulan4.png' },
    { id: 5, judul: 'Patung Ganesha', desc: 'Patung Ganesha dengan tinggi 70cm.', img: './patungunggulan5.png' },
    { id: 6, judul: 'Patung Bolo-Bolo', desc: 'Detail pahatan tangan yang artistik menghidupkan nuansa khas Bali dengan tinggi 80cm.', img: './patungunggulan6.png' }
  ];

  const faqList = [
    {
      pertanyaan: 'Apakah bisa mengirim dan memasang ke daerah luar Tabanan?',
      jawaban: 'Tentu. Kami sering mengirimkan produk kami ke berbagai daerah di Bali. Kami juga menyediakan opsi pengiriman beserta tim instalasi khusus untuk memastikan pemasangan yang sempurna di lokasi Anda.'
    },
    {
      pertanyaan: 'Berapa lama waktu pembuatan?',
      jawaban: 'Waktu pembuatan bervariasi tergantung tingkat kerumitan ukiran, biasanya berkisar antara 3 hingga 6 minggu untuk hasil ukiran tangan kayu jati yang berkualitas tinggi.'
    },
    {
      pertanyaan: 'Apakah saya bisa memesan desain (custom) sendiri?',
      jawaban: 'Ya, Anda dapat memesan desain custom sesuai dengan ukuran, preferensi motif ukiran, dan gaya arsitektur hunian yang Anda inginkan.'
    },
    {
      pertanyaan: 'Bagaimana sistem pembayarannya?',
      jawaban: 'Sistem pembayaran kami terbagi menjadi 3 tahap: DP 50% untuk memulai produksi, 30% saat barang selesai diproduksi dan siap kirim, serta pelunasan 20% setelah barang diterima dan terpasang sempurna.'
    }
  ];

  return (
    <div className="container">
      <nav className="navbar">
        {/* Logo diperbaiki agar tidak double (hanya menampilkan gambar logo atau teks saja secara bersih) */}
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

      {/* Hero Section dengan jarak margin-top/padding agar posisi turun ke bawah */}
      <header className="hero-banner" style={{ position: 'relative', overflow: 'hidden', marginTop: '20px' }}>
        

        <div className="hero-content" style={{ position: 'relative', zIndex: 2 }}>
          <h1 className="hero-title" style={{ color: '#d4af37', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
            Gupta Bali Ukir D'Bali
          </h1>
          <p className="hero-desc" style={{ color: '#f0f0f0', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
            Pengrajin kusen, pintu, dan jendela premium dengan sentuhan seni ukir otentik Bali untuk hunian mewah Anda.
          </p>
          <div className="hero-actions">
            <a href="#produk" className="btn-outline">Lihat Koleksi</a>
            <button 
              onClick={() => window.open('https://wa.me/628135988482?text=Halo%20Gupta%20Bali%20Ukir,%20saya%20ingin%20meminta%20penawaran')} 
              className="btn-dark"
            >
              Minta Penawaran
            </button>
          </div>
        </div>
      </header>

      {/* Koleksi Unggulan */}
      <section className="koleksi-section" id="katalog">
        <h2 className="section-heading">Koleksi Unggulan</h2>
        <p className="section-sub">Hadirkan nuansa resort Bali ke dalam rumah Anda dengan karya seni kami.</p>

        <div className="koleksi-grid">
          {koleksiUnggulan.map((item) => (
            <div key={item.id} className="koleksi-card">
              <img src={item.img} alt={item.judul} className="koleksi-img" />
              <div className="koleksi-body">
                <h3 className="koleksi-title">{item.judul}</h3>
                <p className="koleksi-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Keunggulan */}
      <section className="keunggulan-section">
        <h2 className="keunggulan-main-title">Keunggulan Karya Ukir Kami</h2>
        <p className="keunggulan-desc">
          Dikerjakan secara teliti oleh perajin berpengalaman di Br. Dinas Jakatebel, Tangguntiti, Tabanan. Berikut keunggulan produk kami:
        </p>

        <div className="why-grid">
          <div className="why-item">
            <h3 className="why-title">Kayu Pilihan</h3>
            <p className="why-text">Menggunakan material kayu berkualitas tinggi yang awet dan tahan lama.</p>
          </div>
          <div className="why-item">
            <h3 className="why-title">Detail Artistik</h3>
            <p className="why-text">Pahatan tangan asli (handmade) dengan seni ukir khas tradisional Bali.</p>
          </div>
          <div className="why-item">
            <h3 className="why-title">Terpercaya Sejak 2009</h3>
            <p className="why-text">Berpengalaman melayani berbagai kebutuhan ukiran rumah, loster, hingga menur.</p>
          </div>
        </div>
      </section>

      {/* Bagian FAQ */}
      <section className="faq-section">
        <div className="faq-container">
          <p className="faq-subtitle">Ada Pertanyaan?</p>
          <h2 className="faq-title">Yang Sering Ditanyakan</h2>

          <div className="faq-list">
            {faqList.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="faq-card">
                  <div 
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="faq-question-row"
                  >
                    <h3 className="faq-q-text">{faq.pertanyaan}</h3>
                    <div className="faq-icon-box">
                      {isOpen ? '×' : '+'}
                    </div>
                  </div>

                  {isOpen && (
                    <div className="faq-answer">
                      {faq.jawaban}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bagian Testimoni */}
      <section className="testimoni-section" id="testimoni">
        <div className="testimoni-container">
          <p className="testimoni-subtitle">Yang Mereka Katakan</p>
          <h2 className="testimoni-heading-main">Kepercayaan yang Teruji</h2>

          <div className="testimoni-grid">
            <div className="testimoni-card-new">
              <div className="testimoni-header-row">
                <div className="testimoni-stars">★★★★★</div>
                <div className="testimoni-quote-icon">“</div>
              </div>
              <p className="testimoni-text">
                “Gebyok yang dipesan hasilnya sangat luar biasa. Ukirannya dalam dan halus. Sangat merepresentasikan kemewahan Bali yang sesungguhnya.”
              </p>
              <div className="testimoni-divider"></div>
              <div className="testimoni-author-row">
                <div className="testimoni-avatar">H</div>
                <div>
                  <h4 className="testimoni-name">Bpk. Hendra W.</h4>
                  <p className="testimoni-role">Pemilik Villa, Canggu</p>
                </div>
              </div>
            </div>

            <div className="testimoni-card-new">
              <div className="testimoni-header-row">
                <div className="testimoni-stars">★★★★★</div>
                <div className="testimoni-quote-icon">“</div>
              </div>
              <p className="testimoni-text">
                “Selalu puas bekerja sama dengan Gupta Bali Ukir. Presisi ukurannya tepat dan pengiriman ke Jakarta selalu tiba dalam kondisi sempurna tanpa cacat.”
              </p>
              <div className="testimoni-divider"></div>
              <div className="testimoni-author-row">
                <div className="testimoni-avatar">S</div>
                <div>
                  <h4 className="testimoni-name">Ibu Sarah M.</h4>
                  <p className="testimoni-role">Principal Architect, Gianyar</p>
                </div>
              </div>
            </div>

            <div className="testimoni-card-new">
              <div className="testimoni-header-row">
                <div className="testimoni-stars">★★★★★</div>
                <div className="testimoni-quote-icon">“</div>
              </div>
              <p className="testimoni-text">
                “The wooden doors transformed our resort entirely. True Balinese craftsmanship — the teak quality is undeniably premium. Will always return.”
              </p>
              <div className="testimoni-divider"></div>
              <div className="testimoni-author-row">
                <div className="testimoni-avatar">D</div>
                <div>
                  <h4 className="testimoni-name">Mr. David K.</h4>
                  <p className="testimoni-role">Resort Director, Ubud</p>
                </div>
              </div>
            </div>
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

export default App;
