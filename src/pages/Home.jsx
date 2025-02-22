const Home = () => {
  return (
    <>
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

      {/* Reviews Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="backdrop-blur-lg bg-white/30 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-orange-900 mb-6 text-center">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-orange-800 mb-12 text-center max-w-2xl mx-auto">
              Descubre por qué nuestros clientes aman la experiencia Latte
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <div key={index} className="backdrop-blur-md bg-white/40 rounded-xl p-6 hover:transform hover:scale-105 transition-all">
                  <div className="flex items-center mb-4">
                    <img 
                      src={review.avatar} 
                      alt={review.name} 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-orange-900">{review.name}</h3>
                      <p className="text-sm text-orange-700">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-500 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i}
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-orange-800">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
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

const reviews = [
  {
    name: "María González",
    date: "1 de junio, 2024",
    avatar: "https://placehold.co/100x100?text=MG",
    text: "Me encanta el ambiente y el café es increíble. Siempre pido un latte y siempre está perfecto. La música es genial y el personal es amable y atento. Es un gran lugar para relajarse o trabajar."
  },
  {
    name: "Pablo Hernández",
    date: "20 de mayo, 2024",
    avatar: "https://placehold.co/100x100?text=PH",
    text: "El cold brew estaba delicioso y los pasteles estaban frescos. El barista fue muy amable e hizo mi bebida exactamente como la quería. ¡El café tiene un ambiente genial y la decoración es hermosa!"
  },
  {
    name: "Alejandra López",
    date: "10 de mayo, 2024",
    avatar: "https://placehold.co/100x100?text=AL",
    text: "Esta es mi nueva cafetería favorita. El mocha estaba perfecto y la tostada de aguacate increíble. El servicio fue rápido y el personal muy amable. También tienen una linda área de patio con muchas plantas."
  }
];

export default Home;