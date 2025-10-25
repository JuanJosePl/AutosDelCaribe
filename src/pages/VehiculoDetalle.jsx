import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaWhatsapp, FaInstagram, FaCheckCircle, FaArrowLeft, 
  FaRoad, FaCog, FaGasPump, FaMapMarkerAlt, FaCalendar,
  FaShareAlt, FaHeart, FaPhone, FaChevronLeft, FaChevronRight
} from 'react-icons/fa';
import autosData from '../data/autos.json';
import CarCard from '../components/CarCard';
const VehiculoDetalle = () => {
  const { id } = useParams();
  const vehiculo = autosData.find(car => car.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!vehiculo) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-dark-800 mb-4">Vehículo no encontrado</h2>
          <Link to="/vehiculos" className="btn-primary">
            Ver todos los vehículos
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const relacionados = autosData
    .filter(car => car.id !== vehiculo.id && car.marca === vehiculo.marca)
    .slice(0, 3);

  const whatsappMessage = `Hola! Estoy interesado en el ${vehiculo.nombre} ${vehiculo.modelo}. Me gustaría obtener más información.`;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=573001234567&text=${encodeURIComponent(whatsappMessage)}`;

  const nextImage = () => {
    setSelectedImage((prev) => 
      prev === vehiculo.galeria.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImage((prev) => 
      prev === 0 ? vehiculo.galeria.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container-custom py-4">
          <div className="flex items-center text-sm text-dark-600">
            <Link to="/" className="hover:text-primary-600">Inicio</Link>
            <span className="mx-2">/</span>
            <Link to="/vehiculos" className="hover:text-primary-600">Vehículos</Link>
            <span className="mx-2">/</span>
            <span className="text-primary-600 font-medium">{vehiculo.nombre}</span>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        <Link to="/vehiculos" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6 font-medium">
          <FaArrowLeft className="mr-2" />
          Volver a vehículos
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Galería de Imágenes */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Imagen Principal */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-card mb-4 group">
              <img
                src={vehiculo.galeria[selectedImage]}
                alt={`${vehiculo.nombre} - Vista ${selectedImage + 1}`}
                className="w-full h-96 object-cover"
              />
              
              {/* Navegación de Imágenes */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <FaChevronLeft className="text-dark-800" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <FaChevronRight className="text-dark-800" />
              </button>

              {/* Contador de Imágenes */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                {selectedImage + 1} / {vehiculo.galeria.length}
              </div>

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {vehiculo.destacado && (
                  <span className="bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    ⭐ Destacado
                  </span>
                )}
                <span className={`text-white text-xs font-bold px-3 py-1 rounded-full ${
                  vehiculo.estado === 'nuevo' ? 'bg-blue-600' : 'bg-orange-600'
                }`}>
                  {vehiculo.estado === 'nuevo' ? '🆕 Nuevo' : '✓ Usado'}
                </span>
              </div>

              {/* Botón Favorito */}
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300"
              >
                <FaHeart className={isFavorite ? 'text-red-500' : 'text-gray-400'} size={20} />
              </button>
            </div>

            {/* Miniaturas */}
            <div className="grid grid-cols-3 gap-3">
              {vehiculo.galeria.map((imagen, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === index 
                      ? 'border-primary-600 shadow-lg' 
                      : 'border-transparent hover:border-primary-300'
                  }`}
                >
                  <img
                    src={imagen}
                    alt={`Vista ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Información del Vehículo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-card p-8">
              <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-dark-800 mb-2">
                  {vehiculo.nombre}
                </h1>
                <p className="text-lg text-dark-600">{vehiculo.marca} • Modelo {vehiculo.modelo}</p>
              </div>

              <div className="mb-8">
                <p className="text-4xl font-bold text-primary-600">
                  {formatPrice(vehiculo.precio)}
                </p>
                <p className="text-sm text-dark-500 mt-1">Precio en pesos colombianos</p>
              </div>

              {/* Especificaciones Principales */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                  <div className="bg-primary-100 p-3 rounded-lg mr-3">
                    <FaRoad className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <p className="text-xs text-dark-500">Kilometraje</p>
                    <p className="font-bold text-dark-800">{vehiculo.kilometraje}</p>
                  </div>
                </div>

                <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                  <div className="bg-primary-100 p-3 rounded-lg mr-3">
                    <FaCog className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <p className="text-xs text-dark-500">Transmisión</p>
                    <p className="font-bold text-dark-800">{vehiculo.transmision}</p>
                  </div>
                </div>

                <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                  <div className="bg-primary-100 p-3 rounded-lg mr-3">
                    <FaGasPump className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <p className="text-xs text-dark-500">Motor</p>
                    <p className="font-bold text-dark-800">{vehiculo.motor}</p>
                  </div>
                </div>

                <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                  <div className="bg-primary-100 p-3 rounded-lg mr-3">
                    <FaCalendar className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <p className="text-xs text-dark-500">Año</p>
                    <p className="font-bold text-dark-800">{vehiculo.modelo}</p>
                  </div>
                </div>
              </div>

              {/* Ubicación */}
              <div className="flex items-center bg-blue-50 p-4 rounded-lg mb-8">
                <FaMapMarkerAlt className="text-blue-600 text-xl mr-3" />
                <div>
                  <p className="text-xs text-dark-500">Ubicación del vehículo</p>
                  <p className="font-semibold text-dark-800">{vehiculo.placas}</p>
                </div>
              </div>

              {/* Botones de Acción */}
              <div className="space-y-3 mb-6">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center text-lg"
                >
                  <FaWhatsapp size={24} />
                  Contactar por WhatsApp
                </a>
                <button className="btn-secondary w-full justify-center text-lg">
                  <FaPhone size={20} />
                  Llamar Ahora
                </button>
              </div>

              {/* Compartir */}
              <div className="flex items-center justify-center gap-4 pt-6 border-t">
                <button className="flex items-center text-dark-600 hover:text-primary-600 transition-colors">
                  <FaShareAlt className="mr-2" />
                  Compartir
                </button>
                <a
                  href="https://www.instagram.com/autosdelcaribecol/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-dark-600 hover:text-pink-600 transition-colors"
                >
                  <FaInstagram className="mr-2" />
                  Ver en Instagram
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Descripción y Características */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Descripción */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-card p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-dark-800 mb-4">Descripción</h2>
              <p className="text-dark-600 leading-relaxed text-lg">
                {vehiculo.descripcion}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-card p-8"
            >
              <h2 className="text-2xl font-bold text-dark-800 mb-6">Características</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {vehiculo.caracteristicas.map((caracteristica, index) => (
                  <div key={index} className="flex items-start">
                    <FaCheckCircle className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-dark-700">{caracteristica}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-primary-600 to-primary-500 rounded-2xl p-8 text-white mb-6"
            >
              <h3 className="text-2xl font-bold mb-4">¿Necesitas Financiamiento?</h3>
              <p className="mb-6 text-primary-50">
                Te ayudamos a conseguir el mejor plan de financiamiento para tu vehículo.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2" />
                  Tasas desde 0.9% mensual
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2" />
                  Aprobación en 24 horas
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2" />
                  Sin cuota inicial
                </li>
              </ul>
              <button className="bg-white text-primary-600 w-full py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Solicitar Financiamiento
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl shadow-card p-6"
            >
              <h3 className="font-bold text-dark-800 mb-4">¿Tienes un vehículo para dar en parte de pago?</h3>
              <p className="text-dark-600 text-sm mb-4">
                Evaluamos tu vehículo actual y te damos el mejor precio.
              </p>
              <button className="btn-secondary w-full">
                Cotizar mi Vehículo
              </button>
            </motion.div>
          </div>
        </div>

        {/* Vehículos Relacionados */}
        {relacionados.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-dark-800 mb-2">
              Vehículos <span className="gradient-text">Relacionados</span>
            </h2>
            <p className="text-dark-600 mb-8">Otros vehículos que podrían interesarte</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {relacionados.map((car, index) => (
                <CarCard key={car.id} car={car} index={index} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default VehiculoDetalle;