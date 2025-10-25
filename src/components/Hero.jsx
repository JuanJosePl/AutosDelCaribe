import { motion } from 'framer-motion';
import { FaWhatsapp, FaCar, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  const features = [
    'Vehículos Certificados',
    'Financiamiento Disponible',
    'Garantía Incluida'
  ];

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-dark-900/85 to-dark-900/70 z-10"></div>
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920"
          alt="Luxury Cars"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 rounded-full px-4 py-2 mb-6"
            >
              <FaCar className="mr-2 text-primary-400" />
              <span className="text-sm font-medium">Concesionario Oficial</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Encuentra el{' '}
              <span className="gradient-text">Auto Perfecto</span>{' '}
              para Ti
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Los mejores vehículos nuevos y usados de la región Caribe. 
              Calidad garantizada, financiamiento flexible y atención personalizada.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <FaCheckCircle className="text-primary-400 mr-2" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/vehiculos" className="btn-primary text-center">
                Ver Vehículos Disponibles
              </Link>
              <a
                href="https://api.whatsapp.com/message/3YKAWUIC7XJSE1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp justify-center"
              >
                <FaWhatsapp size={20} />
                Contactar Ahora
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20"
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-primary-400 mb-1">500+</h3>
                <p className="text-sm text-gray-400">Clientes Satisfechos</p>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-primary-400 mb-1">50+</h3>
                <p className="text-sm text-gray-400">Vehículos Disponibles</p>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-primary-400 mb-1">10+</h3>
                <p className="text-sm text-gray-400">Años de Experiencia</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass-effect rounded-2xl p-8 shadow-2xl"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-dark-800 mb-2">
                    ¿Buscas financiamiento?
                  </h3>
                  <p className="text-dark-600">
                    Te ayudamos a conseguir el mejor plan de financiamiento para tu vehículo.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <FaCheckCircle className="text-primary-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-800">Tasas Competitivas</h4>
                      <p className="text-sm text-dark-600">Desde 0.9% mensual</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <FaCheckCircle className="text-primary-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-800">Proceso Rápido</h4>
                      <p className="text-sm text-dark-600">Aprobación en 24 horas</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <FaCheckCircle className="text-primary-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-800">Sin Inicial</h4>
                      <p className="text-sm text-dark-600">Opciones sin cuota inicial</p>
                    </div>
                  </div>
                </div>

                <button className="w-full btn-primary">
                  Solicitar Financiamiento
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white text-center"
        >
          <p className="text-sm mb-2">Desliza para ver más</p>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;