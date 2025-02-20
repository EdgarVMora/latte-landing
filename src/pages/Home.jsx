import Navbar from '../components/Navbar';


const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-300">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="backdrop-blur-lg bg-white/30 rounded-3xl p-12 max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-orange-900 mb-6">
              Descubre el sabor de las recompensas
            </h1>
            <p className="text-xl text-orange-800 mb-8">
              Gana puntos con cada compra y disfruta de bebidas gratis, ofertas exclusivas y más.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600">
                Descarga la App
              </button>
              <button className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-full hover:bg-orange-500 hover:text-white">
                Conoce más
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-orange-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-orange-900 mb-12">Productos Populares</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {products.map((product) => (
              <div key={product.id} className="backdrop-blur-md bg-white/30 rounded-xl p-4 hover:transform hover:scale-105 transition-all">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-semibold text-orange-900">{product.name}</h3>
                <p className="text-orange-700">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="backdrop-blur-lg bg-white/30 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-orange-900 mb-12">Beneficios Exclusivos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-gift text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-semibold text-orange-900 mb-2">Recompensas Instantáneas</h3>
                <p className="text-orange-800">Gana puntos con cada compra y canjéalos por bebidas gratis</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-birthday-cake text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-semibold text-orange-900 mb-2">Regalo de Cumpleaños</h3>
                <p className="text-orange-800">Recibe una bebida gratis en tu día especial</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-mobile-alt text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-semibold text-orange-900 mb-2">Pedidos Móviles</h3>
                <p className="text-orange-800">Ordena y paga desde tu teléfono, evita las filas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-20 px-6 bg-gradient-to-t from-transparent to-orange-100">
        <div className="container mx-auto">
          <div className="backdrop-blur-lg bg-white/30 rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold text-orange-900 mb-6">
                Descarga nuestra app y comienza a ganar
              </h2>
              <p className="text-xl text-orange-800 mb-8">
                Disponible para iOS y Android. Únete a nuestra comunidad de más de 1 millón de usuarios satisfechos.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800">
                  <i className="fab fa-apple mr-2"></i> App Store
                </button>
                <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800">
                  <i className="fab fa-google-play mr-2"></i> Play Store
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img src="/app-mockup.png" alt="App Mockup" className="max-w-md mx-auto" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// Array de productos con imágenes placeholder
const products = [
  {
    id: 1,
    name: "Café Helado",
    price: 2.95,
    image: "https://placehold.co/400x300?text=Cafe+Helado"
  },
  {
    id: 2,
    name: "Cold Brew",
    price: 3.25,
    image: "https://placehold.co/400x300?text=Cold+Brew"
  },
  {
    id: 3,
    name: "Espresso",
    price: 2.45,
    image: "https://placehold.co/400x300?text=Espresso"
  },
  {
    id: 4,
    name: "Frappuccino",
    price: 4.85,
    image: "https://placehold.co/400x300?text=Frappuccino"
  },
  {
    id: 5,
    name: "Té Helado",
    price: 3.65,
    image: "https://placehold.co/400x300?text=Te+Helado"
  }
];

export default Home;