import { motion } from 'framer-motion';
import { 
  FaAward, FaHandshake, FaShieldAlt, FaUsers, 
  FaCar, FaCheckCircle, FaHeart, FaStar 
} from 'react-icons/fa';

const Nosotros = () => {
  const valores = [
    {
      icon: FaHandshake,
      title: 'Confianza',
      description: 'Construimos relaciones duraderas basadas en la honestidad y transparencia.'
    },
    {
      icon: FaShieldAlt,
      title: 'Calidad',
      description: 'Cada vehículo pasa por una rigurosa inspección para garantizar tu satisfacción.'
    },
    {
      icon: FaUsers,
      title: 'Atención Personalizada',
      description: 'Te acompañamos en cada paso del proceso de compra de tu vehículo.'
    },
    {
      icon: FaHeart,
      title: 'Compromiso',
      description: 'Estamos comprometidos con tu satisfacción y la de tu familia.'
    }
  ];

  const timeline = [
    {
      year: '2014',
      title: 'Fundación',
      description: 'AutosDelCaribe abre sus puertas en Barranquilla con la misión de ofrecer vehículos de calidad.'
    },
    {
      year: '2017',
      title: 'Expansión',
      description: 'Ampliamos nuestro inventario y alcanzamos más de 200 clientes satisfechos.'
    },
    {
      year: '2020',
      title: 'Transformación Digital',
      description: 'Implementamos nuestra plataforma online para facilitar la compra de vehículos.'
    },
    {
      year: '2024',
      title: 'Líderes Regionales',
      description: 'Nos consolidamos como uno de los concesionarios más confiables de la región Caribe.'
    }
  ];

  const equipo = [
    {
      nombre: 'Carlos Martínez',
      cargo: 'Director General',
      imagen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400'
    },
    {
      nombre: 'María López',
      cargo: 'Gerente de Ventas',
      imagen: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400'
    },
    {
      nombre: 'Juan Rodríguez',
      cargo: 'Asesor Financiero',
      imagen: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400'
    },
    {
      nombre: 'Ana García',
      cargo: 'Asesora Comercial',
      imagen: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-600 to-primary-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <FaAward className="mr-2" />
              <span className="text-sm font-medium">Más de 10 años de experiencia</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tu Concesionario de Confianza en la Costa Caribe
            </h1>
            <p className="text-xl text-primary-50">
              Conectando a las familias colombianas con los vehículos de sus sueños desde 2014
            </p>
          </motion.div>
        </div>
      </div>

      {/* Misión y Visión */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 shadow-card"
            >
              <div className="bg-primary-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <FaCar className="text-white text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-dark-800 mb-4">Nuestra Misión</h2>
              <p className="text-dark-600 leading-relaxed text-lg">
                Facilitar el acceso a vehículos de calidad para las familias de la región Caribe, 
                ofreciendo una experiencia de compra transparente, honesta y personalizada. 
                Nos comprometemos a ser más que un concesionario, siendo aliados en el sueño de 
                movilidad de nuestros clientes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-card"
            >
              <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <FaStar className="text-white text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-dark-800 mb-4">Nuestra Visión</h2>
              <p className="text-dark-600 leading-relaxed text-lg">
                Ser el concesionario líder y más confiable de la Costa Caribe colombiana, 
                reconocido por nuestra excelencia en servicio al cliente, la calidad de nuestros 
                vehículos y nuestro compromiso con la satisfacción de cada familia que deposita 
                su confianza en nosotros.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">
              Nuestros <span className="gradient-text">Valores</span>
            </h2>
            <p className="section-subtitle">
              Los principios que guían cada una de nuestras acciones
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-primary-600 to-primary-400 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <valor.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-dark-800 mb-3">{valor.title}</h3>
                <p className="text-dark-600 leading-relaxed">{valor.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">
              Nuestra <span className="gradient-text">Historia</span>
            </h2>
            <p className="section-subtitle">
              Un viaje de crecimiento y compromiso con nuestros clientes
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-8 pb-12 border-l-4 border-primary-600 last:pb-0"
              >
                <div className="absolute -left-[13px] top-0 w-6 h-6 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="bg-gray-50 rounded-xl p-6 ml-8 hover:shadow-card transition-shadow">
                  <span className="inline-block bg-primary-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-3">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-dark-800 mb-2">{item.title}</h3>
                  <p className="text-dark-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">
              Nuestro <span className="gradient-text">Equipo</span>
            </h2>
            <p className="section-subtitle">
              Profesionales comprometidos con tu satisfacción
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipo.map((miembro, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={miembro.imagen}
                    alt={miembro.nombre}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-dark-800 mb-1">{miembro.nombre}</h3>
                  <p className="text-primary-600 font-medium">{miembro.cargo}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Números que Hablan por Sí Solos
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Clientes Satisfechos', icon: FaUsers },
              { number: '50+', label: 'Vehículos en Stock', icon: FaCar },
              { number: '10+', label: 'Años de Experiencia', icon: FaAward },
              { number: '98%', label: 'Satisfacción', icon: FaStar }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-4xl" />
                </div>
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
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
                ¿Listo para Ser Parte de Nuestra Historia?
              </h2>
              <p className="text-xl mb-8 text-primary-50 max-w-2xl mx-auto">
                Únete a cientos de clientes satisfechos que han encontrado su vehículo ideal con nosotros
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/vehiculos"
                  className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl inline-block"
                >
                  Ver Vehículos Disponibles
                </a>
                <a
                  href="/contacto"
                  className="bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-800 transition-all duration-300 hover:scale-105 hover:shadow-xl inline-block border-2 border-white/30"
                >
                  Contáctanos
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;