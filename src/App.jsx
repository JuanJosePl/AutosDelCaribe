import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Vehiculos from './pages/Vehiculos';
import VehiculoDetalle from './pages/VehiculoDetalle';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vehiculos" element={<Vehiculos />} />
            <Route path="/nuevos" element={<Vehiculos />} />
            <Route path="/usados" element={<Vehiculos />} />
            <Route path="/vehiculo/:id" element={<VehiculoDetalle />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;