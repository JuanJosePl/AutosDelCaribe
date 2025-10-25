import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaFacebook, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Vehículos Nuevos', path: '/nuevos' },
    { name: 'Vehículos Usados', path: '/usados' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Contacto', path: '/contacto' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-gradient-to-br from-dark-800 via-dark-900 to-black text-white pt-16 pb-8">
      <div className="container-custom">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Logo & Description */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-primary-600 to-primary-400 p-2 rounded-lg">
                <FaCar className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  <span className="text-primary-400">Autos</span>
                  <span className="text-white">Del</span>
                  <span className="text-primary-400">Caribe</span>
                </h3>
                <p className="text-xs text-gray-400">Los Mejores</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Concesionario de vehículos nuevos y usados en la región Caribe. 
              Tu mejor opción para encontrar el auto de tus sueños.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/autosdelcaribecol/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full hover:scale-110 transition-transform duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://api.whatsapp.com/message/3YKAWUIC7XJSE1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-full hover:scale-110 transition-transform duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-blue-700 p-3 rounded-full hover:scale-110 transition-transform duration-300"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-4 text-primary-400">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-4 text-primary-400">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start text-sm">
                <FaMapMarkerAlt className="text-primary-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Barranquilla, Atlántico<br />Colombia
                </span>
              </li>
              <li className="flex items-center text-sm">
                <FaPhone className="text-primary-400 mr-3 flex-shrink-0" />
                <a href="tel:+573001234567" className="text-gray-400 hover:text-primary-400 transition-colors">
                  +57 300 123 4567
                </a>
              </li>
              <li className="flex items-center text-sm">
                <FaEnvelope className="text-primary-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@autosdelcaribe.com" className="text-gray-400 hover:text-primary-400 transition-colors">
                  info@autosdelcaribe.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Business Hours */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-4 text-primary-400">Horarios</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex justify-between">
                <span>Lunes - Viernes:</span>
                <span className="font-medium text-white">8am - 6pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sábados:</span>
                <span className="font-medium text-white">8am - 5pm</span>
              </li>
              <li className="flex justify-between">
                <span>Domingos:</span>
                <span className="font-medium text-white">9am - 2pm</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-primary-600/10 border border-primary-600/30 rounded-lg">
              <p className="text-xs text-gray-300 mb-2">¿Necesitas ayuda?</p>
              <a
                href="https://api.whatsapp.com/message/3YKAWUIC7XJSE1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 font-medium text-sm flex items-center transition-colors"
              >
                <FaWhatsapp className="mr-2" />
                Chatea con nosotros
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} <span className="text-primary-400 font-medium">AutosDelCaribe</span>. 
              Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-xs text-gray-400">
              <Link to="/privacidad" className="hover:text-primary-400 transition-colors">
                Política de Privacidad
              </Link>
              <Link to="/terminos" className="hover:text-primary-400 transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;