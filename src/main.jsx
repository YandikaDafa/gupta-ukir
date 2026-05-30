import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import TentangKami from './pages/TentangKami'
import Produk from './pages/Produk';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/produk" element={<Produk />} />
      <Route path="/tentang" element={<TentangKami />} />
    </Routes>
  </BrowserRouter>
)