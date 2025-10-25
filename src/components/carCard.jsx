import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRoad, FaCog, FaGasPump, FaMapMarkerAlt, FaWhatsapp, FaArrowRight } from 'react-icons/fa';

const CarCard = ({ car, index = 0 }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -8 }}
      className="card group"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-64">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          src={car.imagen}
          alt={car.nombre}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {car.destacado && (
            <span className="bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              ⭐ Destacado
            </span>
          )}
          <span className={`text-white text-xs font-bold px-3 py-1 rounded-full ${
            car.estado === 'nuevo' ? 'bg-blue-600' : 'bg-orange-600'
          }`}>
            {car.estado === 'nuevo' ? '🆕 Nuevo' : '✓ Usado'}
          </span>
        </div>

        {/* Quick Actions */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href="https://api.whatsapp.com/message/3YKAWUIC7XJSE1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 inline-block"
            onClick={(e) => e.stopPropagation()}
          >
            <FaWhatsapp size={20} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title & Price */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-dark-800 mb-1 group-hover:text-primary-600 transition-colors">
            {car.nombre}
          </h3>
          <p className="text-2xl font-bold text-primary-600">
            {formatPrice(car.precio)}
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center text-sm text-dark-600">
            <div className="bg-primary-50 p-2 rounded-lg mr-2">
              <FaRoad className="text-primary-600" />
            </div>
            <div>
              <p className="text-xs text-dark-500">Kilometraje</p>
              <p className="font-semibold">{car.kilometraje}</p>
            </div>
          </div>

          <div className="flex items-center text-sm text-dark-600">
            <div className="bg-primary-50 p-2 rounded-lg mr-2">
              <FaCog className="text-primary-600" />
            </div>
            <div>
              <p className="text-xs text-dark-500">Transmisión</p>
              <p className="font-semibold">{car.transmision}</p>
            </div>
          </div>

          <div className="flex items-center text-sm text-dark-600">
            <div className="bg-primary-50 p-2 rounded-lg mr-2">
              <FaGasPump className="text-primary-600" />
            </div>
            <div>
              <p className="text-xs text-dark-500">Motor</p>
              <p className="font-semibold">{car.motor}</p>
            </div>
          </div>

          <div className="flex items-center text-sm text-dark-600">
            <div className="bg-primary-50 p-2 rounded-lg mr-2">
              <FaMapMarkerAlt className="text-primary-600" />
            </div>
            <div>
              <p className="text-xs text-dark-500">Placas</p>
              <p className="font-semibold">{car.placas}</p>
            </div>
          </div>
        </div>

        {/* Año */}
        <div className="mb-4 pb-4 border-b border-gray-200">
          <span className="text-sm text-dark-600">
            <span className="font-semibold text-dark-800">Modelo:</span> {car.modelo}
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Link
            to={`/vehiculo/${car.id}`}
            className="flex-1 btn-primary text-center text-sm group/btn"
          >
            Ver Detalles
            <FaArrowRight className="inline ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
          <a
            href="https://api.whatsapp.com/message/3YKAWUIC7XJSE1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            Cotizar
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;