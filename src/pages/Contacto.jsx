import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, 
  FaClock, FaInstagram, FaFacebook, FaPaperPlane 
} from 'react-icons/fa';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Crear mensaje de WhatsApp
    const whatsappMessage = `*Nuevo Contacto desde la Web*\n\n*Nombre:* ${formData.nombre}\n*Email:* ${formData.email}\n*Teléfono:* ${formData.telefono}\n*Asunto:* ${formData.asunto}\n*Mensaje:* ${formData.mensaje}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=573001234567&text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
    
    // Reset form después de 3 segundos
    setTimeout(() => {
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      content: '+57 300 123 4567',
      link: 'https://api.whatsapp.com/message/3YKAWUIC7XJSE1',
      color: 'green'
    },
    {
      icon: FaPhone,
      title: 'Teléfono',
      content: '+57 (5) 123 4567',
      link: 'tel:+5751234567',
      color: 'blue'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'info@autosdelcaribe.com',
      link: 'mailto:info@autosdelcaribe.com',
      color: 'red'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Ubicación',
      content: 'Barranquilla, Atlántico',
      link: 'https://maps.google.com',
      color: 'purple'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-500 text-white py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contáctanos
            </h1>
            <p className="text-xl text-primary-50 max-w-2xl mx-auto">
              Estamos aquí para ayudarte a encontrar el vehículo perfecto
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Información de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="space-y-6">
              {/* Tarjetas de Contacto */}
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-card p-6 flex items-start hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className={`bg-${info.color}-100 p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform`}>
                    <info.icon className={`text-${info.color}-600 text-2xl`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-800 mb-1">{info.title}</h3>
                    <p className="text-dark-600">{info.content}</p>
                  </div>
                </motion.a>
              ))}

              {/* Horarios */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-primary-600 to-primary-500 rounded-2xl shadow-card p-6 text-white"
              >
                <div className="flex items-center mb-4">
                  <FaClock className="text-2xl mr-3" />
                  <h3 className="font-bold text-xl">Horarios de Atención</h3>
                </div>
                <div className="space-y-2 text-primary-50">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes:</span>
                    <span className="font-semibold text-white">8am - 6pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados:</span>
                    <span className="font-semibold text-white">8am - 5pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos:</span>
                    <span className="font-semibold text-white">9am - 2pm</span>
                  </div>
                </div>
              </motion.div>

              {/* Redes Sociales */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-2xl shadow-card p-6"
              >
                <h3 className="font-bold text-dark-800 mb-4">Síguenos</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/autosdelcaribecol/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 rounded-xl hover:scale-110 transition-transform"
                  >
                    <FaInstagram className="text-white text-2xl" />
                  </a>
                  <a
                    href="https://api.whatsapp.com/message/3YKAWUIC7XJSE1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-xl hover:scale-110 transition-transform"
                  >
                    <FaWhatsapp className="text-white text-2xl" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-500 to-blue-700 p-4 rounded-xl hover:scale-110 transition-transform"
                  >
                    <FaFacebook className="text-white text-2xl" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Formulario de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-card p-8">
              <h2 className="text-3xl font-bold text-dark-800 mb-2">
                Envíanos un Mensaje
              </h2>
              <p className="text-dark-600 mb-8">
                Completa el formulario y nos pondremos en contacto contigo lo antes posible
              </p>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6 flex items-center"
                >
                  <FaPaperPlane className="mr-3 text-green-600" />
                  <span>¡Mensaje enviado! Te redirigiremos a WhatsApp.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      placeholder="Juan Pérez"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      placeholder="juan@ejemplo.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      placeholder="+57 300 123 4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      Asunto *
                    </label>
                    <select
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="Consulta General">Consulta General</option>
                      <option value="Cotización">Cotización de Vehículo</option>
                      <option value="Financiamiento">Financiamiento</option>
                      <option value="Parte de Pago">Parte de Pago</option>
                      <option value="Post-venta">Servicio Post-venta</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full md:w-auto px-8 py-4 text-lg"
                >
                  <FaPaperPlane className="inline mr-2" />
                  Enviar Mensaje
                </button>
              </form>
            </div>

            {/* Mapa */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-card p-2 mt-8 overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125444.50485855747!2d-74.86843!3d10.96854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42e3a0c8763b7%3A0x7f32e1b9e2a8b0!2sBarranquilla%2C%20Atl%C3%A1ntico!5e0!3m2!1ses!2sco!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-xl"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;