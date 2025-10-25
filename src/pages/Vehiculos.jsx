import { useState } from 'react';
import { motion } from 'framer-motion';
import CarCard from '../components/CarCard.jsx';
import autosData from '../data/autos.json';
import { FaSearch, FaFilter, FaTimes, FaCar } from 'react-icons/fa';

const Vehiculos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEstado, setSelectedEstado] = useState('todos');
  const [selectedMarca, setSelectedMarca] = useState('todas');
  const [precioMax, setPrecioMax] = useState(300000000);
  const [showFilters, setShowFilters] = useState(false);

  // Obtener marcas únicas
  const marcasUnicas = ['todas', ...new Set(autosData.map(car => car.marca))];

  // Filtrar vehículos
  const vehiculosFiltrados = autosData.filter(car => {
    const matchSearch = car.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       car.marca.toLowerCase().includes(searchTerm.toLowerCase());
    const matchEstado = selectedEstado === 'todos' || car.estado === selectedEstado;
    const matchMarca = selectedMarca === 'todas' || car.marca === selectedMarca;
    const matchPrecio = car.precio <= precioMax;

    return matchSearch && matchEstado && matchMarca && matchPrecio;
  });

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedEstado('todos');
    setSelectedMarca('todas');
    setPrecioMax(300000000);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

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
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <FaCar className="mr-2" />
              <span className="text-sm font-medium">Catálogo Completo</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Encuentra tu Vehículo Ideal
            </h1>
            <p className="text-xl text-primary-50 max-w-2xl mx-auto">
              Explora nuestra colección completa de vehículos nuevos y usados
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filtros - Desktop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:block"
          >
            <div className="bg-white rounded-2xl shadow-card p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-dark-800">Filtros</h2>
                <button
                  onClick={resetFilters}
                  className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                >
                  Limpiar
                </button>
              </div>

              {/* Buscador */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-dark-700 mb-2">
                  Buscar
                </label>
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Nombre o marca..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Estado */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-dark-700 mb-3">
                  Estado
                </label>
                <div className="space-y-2">
                  {['todos', 'nuevo', 'usado'].map((estado) => (
                    <label key={estado} className="flex items-center cursor-pointer group">
                      <input
                        type="radio"
                        name="estado"
                        value={estado}
                        checked={selectedEstado === estado}
                        onChange={(e) => setSelectedEstado(e.target.value)}
                        className="w-4 h-4 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-dark-700 group-hover:text-primary-600 transition-colors capitalize">
                        {estado === 'todos' ? 'Todos' : estado === 'nuevo' ? '🆕 Nuevo' : '✓ Usado'}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Marca */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-dark-700 mb-3">
                  Marca
                </label>
                <select
                  value={selectedMarca}
                  onChange={(e) => setSelectedMarca(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                >
                  {marcasUnicas.map((marca) => (
                    <option key={marca} value={marca}>
                      {marca === 'todas' ? 'Todas las marcas' : marca}
                    </option>
                  ))}
                </select>
              </div>

              {/* Precio Máximo */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-dark-700 mb-2">
                  Precio Máximo
                </label>
                <input
                  type="range"
                  min="50000000"
                  max="300000000"
                  step="10000000"
                  value={precioMax}
                  onChange={(e) => setPrecioMax(parseInt(e.target.value))}
                  className="w-full accent-primary-600"
                />
                <div className="flex justify-between text-sm text-dark-600 mt-2">
                  <span>$50M</span>
                  <span className="font-semibold text-primary-600">
                    {formatPrice(precioMax)}
                  </span>
                  <span>$300M</span>
                </div>
              </div>

              {/* Contador de resultados */}
              <div className="bg-primary-50 rounded-lg p-4 text-center">
                <p className="text-sm text-dark-600">
                  <span className="font-bold text-primary-600 text-2xl">
                    {vehiculosFiltrados.length}
                  </span>
                  <br />
                  {vehiculosFiltrados.length === 1 ? 'vehículo encontrado' : 'vehículos encontrados'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Botón Filtros Móvil */}
          <div className="lg:hidden fixed bottom-4 right-4 z-40">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-all duration-300 hover:scale-110"
            >
              {showFilters ? <FaTimes size={24} /> : <FaFilter size={24} />}
            </button>
          </div>

          {/* Filtros Móvil */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black/50 z-30"
              onClick={() => setShowFilters(false)}
            >
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                onClick={(e) => e.stopPropagation()}
                className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl overflow-y-auto p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-dark-800">Filtros</h2>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="text-dark-600 hover:text-dark-800"
                  >
                    <FaTimes size={24} />
                  </button>
                </div>

                {/* Mismo contenido de filtros que desktop */}
                <div className="space-y-6">
                  {/* Buscador */}
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      Buscar
                    </label>
                    <div className="relative">
                      <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-400" />
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Nombre o marca..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  {/* Estado */}
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-3">
                      Estado
                    </label>
                    <div className="space-y-2">
                      {['todos', 'nuevo', 'usado'].map((estado) => (
                        <label key={estado} className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="estado-mobile"
                            value={estado}
                            checked={selectedEstado === estado}
                            onChange={(e) => setSelectedEstado(e.target.value)}
                            className="w-4 h-4 text-primary-600 focus:ring-primary-500"
                          />
                          <span className="ml-2 text-dark-700 capitalize">
                            {estado === 'todos' ? 'Todos' : estado === 'nuevo' ? '🆕 Nuevo' : '✓ Usado'}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Marca */}
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-3">
                      Marca
                    </label>
                    <select
                      value={selectedMarca}
                      onChange={(e) => setSelectedMarca(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    >
                      {marcasUnicas.map((marca) => (
                        <option key={marca} value={marca}>
                          {marca === 'todas' ? 'Todas las marcas' : marca}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Precio Máximo */}
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      Precio Máximo
                    </label>
                    <input
                      type="range"
                      min="50000000"
                      max="300000000"
                      step="10000000"
                      value={precioMax}
                      onChange={(e) => setPrecioMax(parseInt(e.target.value))}
                      className="w-full accent-primary-600"
                    />
                    <div className="text-center text-primary-600 font-semibold mt-2">
                      {formatPrice(precioMax)}
                    </div>
                  </div>

                  <button
                    onClick={resetFilters}
                    className="btn-secondary w-full"
                  >
                    Limpiar Filtros
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Contenido Principal */}
          <div className="lg:col-span-3">
            {/* Header con resultados */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between mb-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-dark-800">
                  {vehiculosFiltrados.length} {vehiculosFiltrados.length === 1 ? 'Vehículo' : 'Vehículos'}
                </h2>
                <p className="text-dark-600">
                  {selectedEstado !== 'todos' && `Estado: ${selectedEstado} • `}
                  {selectedMarca !== 'todas' && `Marca: ${selectedMarca}`}
                </p>
              </div>
            </motion.div>

            {/* Grid de Vehículos */}
            {vehiculosFiltrados.length > 0 ? (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {vehiculosFiltrados.map((car, index) => (
                  <CarCard key={car.id} car={car} index={index} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl shadow-card p-12 text-center"
              >
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCar className="text-gray-400 text-4xl" />
                </div>
                <h3 className="text-2xl font-bold text-dark-800 mb-2">
                  No se encontraron vehículos
                </h3>
                <p className="text-dark-600 mb-6">
                  Intenta ajustar los filtros para ver más resultados
                </p>
                <button
                  onClick={resetFilters}
                  className="btn-primary"
                >
                  Limpiar Filtros
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vehiculos;