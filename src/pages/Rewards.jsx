import regaloImage from '../assets/rewardsImages/regalo.png';
import ordenMovilImage from '../assets/rewardsImages/ordenaPaga.png';
import personalizaImage from '../assets/rewardsImages/bebidaPersonalizada.png';
import estrellasImage from '../assets/rewardsImages/estrellaRecompensa.png';
import ofertasImage from '../assets/rewardsImages/beneficios.png';
import nivelVerdeImage from '../assets/rewardsImages/nivelVerde.png';
import nivelDoradoImage from '../assets/rewardsImages/nivelDorado.png';
import nivelPlatinoImage from '../assets/rewardsImages/nivelPlatino.png';

const Rewards = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative bg-gradient-to-br from-orange-950 to-orange-800">
        {/* Patrón de fondo decorativo */}
        <div className="absolute inset-0 bg-[url('/path/to/pattern.png')] opacity-10"></div>
        
        {/* Círculos decorativos con glassmorphism */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto relative">
          <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-16 max-w-4xl mx-auto text-center">
            {/* Estrella decorativa */}
            <div className="absolute -top-10 right-10 w-20 h-20 bg-orange-500/30 backdrop-blur-sm rounded-full flex items-center justify-center transform rotate-12">
              <span className="text-4xl">⭐</span>
            </div>
            
            <h1 className="text-7xl font-bold text-white mb-8 leading-tight">
              Cada sorbo suma
              <span className="block text-orange-400">Cada visita recompensa</span>
            </h1>
            
            <p className="text-2xl text-orange-200 mb-12 max-w-2xl mx-auto leading-relaxed">
              Únete a nuestro programa de recompensas y descubre un mundo donde cada taza de café te acerca a experiencias extraordinarias
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-xl mx-auto">
              <button className="w-full sm:w-auto bg-orange-500 text-white px-10 py-4 rounded-full hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 text-lg font-semibold backdrop-blur-sm">
                Únete ahora
              </button>
              <button className="w-full sm:w-auto border-2 border-orange-400 text-orange-400 px-10 py-4 rounded-full hover:bg-orange-400 hover:text-white transform hover:scale-105 transition-all duration-300 text-lg font-semibold backdrop-blur-sm">
                Conoce los beneficios
              </button>
            </div>
            
            {/* Stats con glassmorphism */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
                <h3 className="text-4xl font-bold text-orange-400 mb-2">1M+</h3>
                <p className="text-orange-200">Miembros activos</p>
              </div>
              <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
                <h3 className="text-4xl font-bold text-orange-400 mb-2">5K</h3>
                <p className="text-orange-200">Bebidas gratis al día</p>
              </div>
              <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
                <h3 className="text-4xl font-bold text-orange-400 mb-2">24/7</h3>
                <p className="text-orange-200">Beneficios exclusivos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-20 px-6 relative bg-gradient-to-br from-orange-900 to-orange-800">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-40 right-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-orange-300/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Los beneficios</h2>
            <p className="text-2xl text-orange-200 max-w-2xl mx-auto">
              Disfruta de estos beneficios exclusivos como miembro de nuestra comunidad
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {perks.map((perk, index) => (
              <div 
                key={index} 
                className="backdrop-blur-md bg-white/5 rounded-xl p-6 
                         hover:transform hover:scale-105 transition-all duration-300
                         border border-white/10 group"
              >
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={perk.image} 
                    alt={perk.title} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-950/50 to-transparent"></div>
                </div>
                <h3 className="text-xl font-semibold text-orange-300 mb-3">{perk.title}</h3>
                <p className="text-orange-200/90">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 px-6 relative bg-gradient-to-br from-orange-950 to-orange-900">
        <div className="absolute inset-0 bg-[url('/path/to/pattern.png')] opacity-5"></div>
        <div className="container mx-auto relative">
          <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-12 border border-white/10">
            <h2 className="text-5xl font-bold text-white mb-16 text-center">
              Cómo funciona
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[1, 2, 3].map((step, index) => (
                <div key={index} className="relative text-center group">
                  <div className="absolute -inset-4 bg-orange-500/5 rounded-2xl blur-xl group-hover:bg-orange-500/10 transition-all duration-300"></div>
                  <div className="relative">
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
                      <span className="text-3xl text-white font-bold">{step}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-orange-300 mb-4">
                      {step === 1 && "Descarga y regístrate"}
                      {step === 2 && "Ordena y gana"}
                      {step === 3 && "Canjea recompensas"}
                    </h3>
                    <p className="text-orange-200/90">
                      {step === 1 && "Descarga la app Latte y crea tu cuenta para comenzar"}
                      {step === 2 && "Gana 1 estrella por cada $1 gastado en tus compras"}
                      {step === 3 && "Usa tus estrellas para obtener bebidas y comida gratis"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Levels */}
      <section className="py-20 px-6 relative bg-gradient-to-br from-orange-900 to-orange-800">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-orange-950 to-transparent"></div>
        <div className="container mx-auto relative">
          <h2 className="text-5xl font-bold text-white mb-16 text-center">
            Niveles de Recompensa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {levels.map((level, index) => (
              <div 
                key={index} 
                className="backdrop-blur-md bg-white/5 rounded-xl p-8 
                         hover:transform hover:scale-105 transition-all duration-300
                         border border-white/10"
              >
                <div className="flex items-center justify-center mb-8">
                  <div className="w-32 h-32 p-2 rounded-xl bg-gradient-to-br from-orange-500/30 to-orange-300/30 
                               backdrop-blur-md flex items-center justify-center
                               shadow-lg shadow-orange-950/20 
                               group-hover:from-orange-500/40 group-hover:to-orange-300/40 
                               transition-all duration-300">
                    <img 
                      src={level.icon} 
                      alt={level.name} 
                      className="w-full h-full object-contain 
                               filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" 
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-orange-300 mb-4 text-center">{level.name}</h3>
                <p className="text-xl text-orange-400 mb-6 text-center">{level.stars} estrellas</p>
                <ul className="space-y-4">
                  {level.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-orange-200/90">
                      <span className="text-orange-400 mr-3">✓</span> {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-20 px-6 relative bg-gradient-to-br from-orange-950 to-orange-900">
        <div className="absolute inset-0 bg-[url('/path/to/pattern.png')] opacity-5"></div>
        <div className="container mx-auto relative">
          <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-16 text-center border border-white/10">
            <h2 className="text-5xl font-bold text-white mb-6">
              Comienza hoy mismo
            </h2>
            <p className="text-2xl text-orange-200 mb-12 max-w-3xl mx-auto">
              Descarga la app Latte, crea tu cuenta y comienza a ganar estrellas con cada compra. 
              ¡Únete a millones de miembros que ya disfrutan de recompensas exclusivas!
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-4 rounded-full 
                           hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 
                           transition-all duration-300 text-xl font-semibold backdrop-blur-sm">
              Descargar la app
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

// Datos de ejemplo
const perks = [
  {
    title: "Regalo de cumpleaños",
    description: "Recibe una bebida gratis en tu día especial",
    image: regaloImage
  },
  {
    title: "Ordena y paga desde la app",
    description: "Salta la fila ordenando desde tu teléfono",
    image: ordenMovilImage
  },
  {
    title: "Personaliza tus bebidas",
    description: "Personaliza tus bebidas y guarda tus favoritos",
    image: personalizaImage
  },
  {
    title: "Recompensas por estrellas",
    description: "Gana estrellas con cada compra",
    image: estrellasImage
  },
  {
    title: "Ofertas exclusivas",
    description: "Accede a promociones solo para miembros",
    image: ofertasImage
  }
];

const levels = [
  {
    name: "Nivel Verde",
    stars: "0-25",
    icon: nivelVerdeImage,
    benefits: [
      "Gana 1 estrella por cada $1",
      "Regalo de cumpleaños",
      "Ofertas personalizadas"
    ]
  },
  {
    name: "Nivel Dorado",
    stars: "26-50",
    icon: nivelDoradoImage,
    benefits: [
      "Todo lo del nivel Verde",
      "Envío gratis en pedidos",
      "Acceso anticipado a nuevos productos"
    ]
  },
  {
    name: "Nivel Platino",
    stars: "51+",
    icon: nivelPlatinoImage,
    benefits: [
      "Todo lo del nivel Dorado",
      "Doble estrellas en días especiales",
      "Upgrades gratuitos en bebidas"
    ]
  }
];

export default Rewards;
