

const Rewards = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-[url('https://placehold.co/1920x600/sepia')] bg-cover bg-center">
        <div className="container mx-auto">
          <div className="backdrop-blur-lg bg-white/30 rounded-3xl p-12 max-w-4xl">
            <h1 className="text-5xl font-bold text-orange-900 mb-6">
              Únete a Latte Rewards
            </h1>
            <p className="text-xl text-orange-800 mb-8">
              Comienza a ganar estrellas con cada pedido. Canjea tus estrellas por café gratis, comida y más.
            </p>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600">
              Únete ahora
            </button>
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-orange-900 mb-6">Los beneficios</h2>
          <p className="text-xl text-orange-800 mb-12">Disfruta de estos beneficios exclusivos como miembro</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {perks.map((perk, index) => (
              <div key={index} className="backdrop-blur-md bg-white/30 rounded-xl p-6 hover:transform hover:scale-105 transition-all">
                <img src={perk.image} alt={perk.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-semibold text-orange-900 mb-2">{perk.title}</h3>
                <p className="text-orange-800">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-orange-100">
        <div className="container mx-auto">
          <div className="backdrop-blur-lg bg-white/30 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-orange-900 mb-12 text-center">Cómo funciona</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-orange-900 mb-4">Descarga y regístrate</h3>
                <p className="text-orange-800">Descarga la app Latte y crea tu cuenta para comenzar</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-orange-900 mb-4">Ordena y gana</h3>
                <p className="text-orange-800">Gana 1 estrella por cada $1 gastado en tus compras</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-orange-900 mb-4">Canjea recompensas</h3>
                <p className="text-orange-800">Usa tus estrellas para obtener bebidas y comida gratis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Levels */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-orange-900 mb-12 text-center">Niveles de Recompensa</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {levels.map((level, index) => (
              <div key={index} className="backdrop-blur-md bg-white/30 rounded-xl p-8 hover:transform hover:scale-105 transition-all">
                <div className="flex items-center justify-center mb-6">
                  <img src={level.icon} alt={level.name} className="w-20 h-20 object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-orange-900 mb-4 text-center">{level.name}</h3>
                <p className="text-lg text-orange-800 mb-4 text-center">{level.stars} estrellas</p>
                <ul className="space-y-3">
                  {level.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-orange-800">
                      <span className="mr-2">✓</span> {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-20 px-6 bg-gradient-to-t from-transparent to-orange-100">
        <div className="container mx-auto">
          <div className="backdrop-blur-lg bg-white/30 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-orange-900 mb-6">
              Comienza hoy mismo
            </h2>
            <p className="text-xl text-orange-800 mb-8 max-w-2xl mx-auto">
              Descarga la app Latte, crea tu cuenta y comienza a ganar estrellas con cada compra. 
              ¡Únete a millones de miembros que ya disfrutan de recompensas exclusivas!
            </p>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600">
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
    image: "https://placehold.co/400x300?text=Regalo+Cumpleaños"
  },
  {
    title: "Ordena y paga desde la app",
    description: "Salta la fila ordenando desde tu teléfono",
    image: "https://placehold.co/400x300?text=Orden+Movil"
  },
  {
    title: "Personaliza tus bebidas",
    description: "Personaliza tus bebidas y guarda tus favoritos",
    image: "https://placehold.co/400x300?text=Personaliza"
  },
  {
    title: "Recompensas por estrellas",
    description: "Gana estrellas con cada compra",
    image: "https://placehold.co/400x300?text=Estrellas"
  },
  {
    title: "Ofertas exclusivas",
    description: "Accede a promociones solo para miembros",
    image: "https://placehold.co/400x300?text=Ofertas"
  }
];

const levels = [
  {
    name: "Nivel Verde",
    stars: "0-25",
    icon: "https://placehold.co/100?text=🌟",
    benefits: [
      "Gana 1 estrella por cada $1",
      "Regalo de cumpleaños",
      "Ofertas personalizadas"
    ]
  },
  {
    name: "Nivel Dorado",
    stars: "26-50",
    icon: "https://placehold.co/100?text=⭐",
    benefits: [
      "Todo lo del nivel Verde",
      "Envío gratis en pedidos",
      "Acceso anticipado a nuevos productos"
    ]
  },
  {
    name: "Nivel Platino",
    stars: "51+",
    icon: "https://placehold.co/100?text=💫",
    benefits: [
      "Todo lo del nivel Dorado",
      "Doble estrellas en días especiales",
      "Upgrades gratuitos en bebidas"
    ]
  }
];

export default Rewards;
