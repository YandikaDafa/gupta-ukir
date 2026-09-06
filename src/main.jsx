import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import TentangKami from './pages/TentangKami'
import Produk from './pages/Produk'
import ProdukRelief from './pages/ProdukRelief'
import ProdukLoster from './pages/ProdukLoster';
import ProdukOrnamen from './pages/ProdukOrnamen';
import ProdukPatung from './pages/ProdukPatung';
import './index.css' // Pastikan file CSS Anda ada

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/produk" element={<Produk />} />
        <Route path="/produk-relief" element={<ProdukRelief />} />
        <Route path="/produk-loster" element={<ProdukLoster />} />
        <Route path="/produk-ornamen" element={<ProdukOrnamen />} />
        <Route path="/produk-patung" element={<ProdukPatung />} />
        <Route path="/tentang" element={<TentangKami />} />
      </Routes>
    </HashRouter>
  </StrictMode>
)
