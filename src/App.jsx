import './App.css';
import { Link, NavLink } from 'react-router-dom';

function App() {
  const produk = [
    { id: 1, nama: 'Relief Kayu Klasik', harga: 'Rp 2.500.000', img: './relief1.png' },
    { id: 2, nama: 'Loster Ukir Estetik', harga: 'Rp 150.000', img: './relief2.png' },
    { id: 3, nama: 'Ornamen Menur Bali', harga: 'Rp 350.000', img: './ukirproduk1.png' }
  ];

  return (
    <div className="container">
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
    
    {/* Dropdown Menu Produk */}
    <li className="dropdown">
      <NavLink to="/produk" className={({ isActive }) => isActive ? "nav-active" : ""}>
        Produk ▾
      </NavLink>
      <ul className="dropdown-menu">
        <li>
          <Link to="/produk">Semua Produk</Link>
        </li>
        <li>
          <Link to="/produk?kategori=relief">Relief</Link>
        </li>
        <li>
          <Link to="/produk?kategori=loster">Loster</Link>
        </li>
        <li>
          <Link to="/produk?kategori=menur">Menur</Link>
        </li>
      </ul>
    </li>

      <li>
        <NavLink to="/tentang" className={({ isActive }) => isActive ? "nav-active" : ""}>
          Tentang Kami
        </NavLink>
      </li>
    </ul>
</nav>

      <header className="hero">
        <h1>Katalog Gupta Bali Ukir D'Bali</h1>
        <p>Sentra kerajinan ukiran kayu berkualitas tinggi di Tabanan sejak 2009.</p>
      </header>

      <div className="product-grid">
        {produk.map((item) => (
          <div key={item.id} className="card">
            <img src={item.img} alt={item.nama} className="relief2" />
            <h3>{item.nama}</h3>
            <p className="price">{item.harga}</p>
            <button className="wa-btn" onClick={() => window.open(`https://wa.me/628135988482?text=Halo%20saya%20ingin%20pesan%20${encodeURIComponent(item.nama)}`)}>
              Pesan via WhatsApp
            </button>
          </div>
        ))}
      </div>

      <section style={{ padding: '60px 5%', textAlign: 'center', backgroundColor: '#b80a0a' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#1c1c1c' }}>Keunggulan Karya Ukir Kami</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto 40px', color: '#4a4a4a', fontSize: '1.1rem' }}>
          Dikerjakan secara teliti oleh perajin berpengalaman di Br. Dinas Jakatebel, Tangguntiti, Tabanan. Berikut keunggulan produk kami:
        </p>

        <div className="why-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '30px', 
          maxWidth: '1000px', 
          margin: '0 auto' 
        }}>
          <div className="why-item">
            <h3 style={{ color: '#bf9b30', marginBottom: '10px' }}>Kayu Pilihan</h3>
            <p style={{ fontSize: '0.9rem' }}>Menggunakan material kayu berkualitas tinggi yang awet dan tahan lama.</p>
          </div>
          <div className="why-item">
            <h3 style={{ color: '#bf9b30', marginBottom: '10px' }}>Detail Artistik</h3>
            <p style={{ fontSize: '0.9rem' }}>Pahatan tangan asli (handmade) dengan seni ukir khas tradisional Bali.</p>
          </div>
          <div className="why-item">
            <h3 style={{ color: '#bf9b30', marginBottom: '10px' }}>Terpercaya Sejak 2009</h3>
            <p style={{ fontSize: '0.9rem' }}>Berpengalaman melayani berbagai kebutuhan ukiran rumah, loster, hingga menur.</p>
          </div>
        </div>
      </section>

      <section className="testimoni-section" id="testimoni">
        <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#1c1c1c' }}>Testimoni Pelanggan</h2>
        <div className="testimoni-scroll">
          <div className="testimoni-card">
            <p>"Detail ukiran reliefnya sangat halus dan rapi. Pintu rumah jadi terlihat jauh lebih mewah!"</p>
            <h4>- Wayan Suardana, Denpasar</h4>
          </div>
          <div className="testimoni-card">
            <p>"Pesan loster ukir custom untuk ventilasi villa, hasilnya memuaskan dan pengerjaannya tepat waktu."</p>
            <h4>- Ketut Wirawan, Tabanan</h4>
          </div>
          <div className="testimoni-card">
            <p>"Kualitas kayunya benar-benar bagus dan kokoh. Ornamen menurnya sangat khas Bali."</p>
            <h4>- Komang Tri, Gianyar</h4>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;