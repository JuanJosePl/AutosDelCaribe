import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Inicio", path: "/" },
    { name: "Nuevos", path: "/nuevos" },
    { name: "Usados", path: "/usados" },
    { name: "Nosotros", path: "/nosotros" },
    { name: "Contacto", path: "/contacto" },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.3 },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-2"
          : "bg-white/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              {/* Luz difusa detrás */}
              <div className="absolute inset-0 bg-primary-500 blur-2xl opacity-60 group-hover:opacity-80 transition-opacity"></div>

              {/* Contenedor fijo */}
                <img
                  src="/autosdelcaribe_icon_nobg.png"
                  alt="Autos del Caribe"
                  className="w-28 h-24 object-contain transition-transform duration-300 group-hover:scale-125 drop-shadow-[0_0_12px_rgba(16,185,129,0.6)]"
                />
              </div>
           

            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                <span className="text-primary-600 drop-shadow-md">Autos</span>
                <span className="text-dark-800"> Del </span>
                <span className="text-primary-600 drop-shadow-md">Caribe</span>
              </h1>
              <p className="text-sm text-dark-500 font-semibold hidden sm:block tracking-wider">
                LOS MEJORES
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-dark-700 hover:text-primary-600 font-medium transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Social Icons & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://www.instagram.com/autosdelcaribecol/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-600 hover:text-pink-600 transition-colors duration-300 hover:scale-110 transform"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://api.whatsapp.com/message/3YKAWUIC7XJSE1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm"
            >
              <FaWhatsapp size={18} />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-dark-700 hover:text-primary-600 transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="lg:hidden fixed top-[72px] right-0 w-full sm:w-80 h-[calc(100vh-72px)] bg-white shadow-2xl"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex-1 space-y-1">
                  {menuItems.map((item, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <Link
                        to={item.path}
                        onClick={toggleMenu}
                        className="block py-3 px-4 text-dark-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg font-medium transition-all duration-300"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  variants={itemVariants}
                  className="border-t pt-6 space-y-4"
                >
                  <a
                    href="https://api.whatsapp.com/message/3YKAWUIC7XJSE1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full justify-center"
                  >
                    <FaWhatsapp size={20} />
                    Contactar por WhatsApp
                  </a>
                  <div className="flex justify-center space-x-6">
                    <a
                      href="https://www.instagram.com/autosdelcaribecol/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-600 hover:text-pink-600 transition-colors"
                    >
                      <FaInstagram size={28} />
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
