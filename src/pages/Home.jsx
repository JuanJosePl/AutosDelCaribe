import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import CarCard from '../components/carCard';
import autosData from '../data/autos.json';
import { FaStar, FaShieldAlt, FaHandshake, FaClock, FaArrowRight, FaWhatsapp } from 'react-icons/fa';

const Home = () => {
  const featuredCars = autosData.filter(car => car.destacado);

  const benefits = [
    {
      icon: FaShieldAlt,
      title: 'Garantía Certificada',
      description: 'Todos nuestros vehículos cuentan con garantía y revisión mecánica completa.'
    },
    {
      icon: FaHandshake,
      title: 'Financiamiento Flexible',
      description: 'Planes de financiamiento a tu medida con las mejores tasas del mercado.'
    },
    {
      icon: FaClock,
      title: 'Proceso Rápido',
      description: 'Trámites ágiles y transparentes. Llevate tu auto el mismo día.'
    },
    {
      icon: FaStar,
      title: 'Atención Personalizada',
      description: 'Asesoría experta para ayudarte a encontrar el vehículo perfecto.'
    }
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Vehicles Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">
              Vehículos <span className="gradient-text">Destacados</span>
            </h2>
            <p className="section-subtitle">
              Descubre nuestra selección premium de vehículos. Calidad garantizada y los mejores precios.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCars.map((car, index) => (
              <CarCard key={car.id} car={car} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/vehiculos" className="btn-primary inline-flex items-center">
              Ver Todos los Vehículos
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="section-subtitle">
              Más que un concesionario, somos tu aliado en la compra de tu vehículo ideal.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-primary-600 to-primary-400 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-dark-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-dark-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-dark-800 to-dark-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestra <span className="text-primary-400">Trayectoria</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Años de experiencia respaldando a nuestros clientes en la región Caribe.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Clientes Felices' },
              { number: '50+', label: 'Vehículos en Stock' },
              { number: '10+', label: 'Años de Experiencia' },
              { number: '98%', label: 'Satisfacción' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-white rounded-full"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-white rounded-full"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Listo para tu Próximo Vehículo?
              </h2>
              <p className="text-xl mb-8 text-primary-50 max-w-2xl mx-auto">
                Contáctanos hoy y descubre cómo podemos ayudarte a conseguir el auto de tus sueños con las mejores condiciones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/vehiculos" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Explorar Vehículos
                </Link>
                <a
                  href="https://api.whatsapp.com/message/3YKAWUIC7XJSE1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <FaWhatsapp size={22} />
                  Contactar por WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-lg font-semibold text-dark-600 mb-2">
              Trabajamos con las Mejores Marcas
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60"
          >
            {['Toyota', 'Mazda', 'Chevrolet', 'Nissan', 'Honda', 'Hyundai'].map((brand, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="text-2xl md:text-3xl font-bold text-dark-400"
              >
                {brand}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;