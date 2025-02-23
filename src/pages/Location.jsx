import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

const Location = () => {
  // Datos de ejemplo para las ubicaciones de las sucursales
  const locations = [
    {
      id: 1,
      name: "Latte Centro",
      address: "Av. Principal 123",
      coordinates: [19.4326, -99.1332],
      schedule: "Lun-Dom: 7:00 - 22:00"
    },
    {
      id: 2,
      name: "Latte Condesa",
      address: "Calle Amsterdam 456",
      coordinates: [19.4115, -99.1707],
      schedule: "Lun-Dom: 7:00 - 23:00"
    },
    {
      id: 3,
      name: "Latte Polanco",
      address: "Av. Presidente Masaryk 789",
      coordinates: [19.4329, -99.1991],
      schedule: "Lun-Dom: 7:00 - 22:00"
    }
  ];

  // Personalizar el icono del marcador
  const customIcon = new Icon({
    iconUrl: "https://placehold.co/30x30?text=☕",
    iconSize: [30, 30]
  });

  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF className="text-2xl" />,
      url: "#",
      color: "hover:bg-blue-600"
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="text-2xl" />,
      url: "#",
      color: "hover:bg-sky-500"
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-2xl" />,
      url: "#",
      color: "hover:bg-pink-600"
    },
    {
      name: "TikTok",
      icon: <FaTiktok className="text-2xl" />,
      url: "#",
      color: "hover:bg-black"
    },
    {
      name: "YouTube",
      icon: <FaYoutube className="text-2xl" />,
      url: "#",
      color: "hover:bg-red-600"
    }
  ];

  return (
    <>
      {/* Hero Section with Map */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="backdrop-blur-lg bg-white/30 rounded-3xl p-12">
            <h1 className="text-4xl font-bold text-orange-900 mb-6">
              Encuentra tu Latte más cercano
            </h1>
            <p className="text-xl text-orange-800 mb-8">
              Visita cualquiera de nuestras sucursales y disfruta de la mejor experiencia de café
            </p>
            
            {/* Map Container */}
            <div className="h-[600px] rounded-xl overflow-hidden mb-8">
              <MapContainer 
                center={[19.4326, -99.1332]} 
                zoom={12} 
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {locations.map((location) => (
                  <Marker 
                    key={location.id}
                    position={location.coordinates}
                    icon={customIcon}
                  >
                    <Popup>
                      <div className="p-2">
                        <h3 className="font-bold text-orange-900">{location.name}</h3>
                        <p className="text-orange-800">{location.address}</p>
                        <p className="text-orange-700 text-sm">{location.schedule}</p>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>

            {/* Locations List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {locations.map((location) => (
                <div key={location.id} className="backdrop-blur-md bg-white/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-orange-900 mb-2">{location.name}</h3>
                  <p className="text-orange-800 mb-2">{location.address}</p>
                  <p className="text-orange-700">{location.schedule}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-orange-100">
        <div className="container mx-auto">
          <div className="backdrop-blur-lg bg-white/30 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-orange-900 mb-6">
              Síguenos en redes sociales
            </h2>
            <p className="text-xl text-orange-800 mb-12 max-w-2xl mx-auto">
              Mantente al día con nuestras últimas novedades, promociones exclusivas y contenido especial
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`
                    flex items-center justify-center
                    w-16 h-16 rounded-full
                    backdrop-blur-md bg-white/30
                    text-orange-900
                    transition-all duration-300
                    hover:text-white ${social.color}
                    hover:transform hover:scale-110
                  `}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="backdrop-blur-md bg-white/20 rounded-xl p-6 text-center">
                <FaInstagram className="text-4xl text-orange-900 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-orange-900 mb-2">Instagram</h3>
                <p className="text-orange-800">Síguenos para ver fotos increíbles de nuestros productos</p>
              </div>
              <div className="backdrop-blur-md bg-white/20 rounded-xl p-6 text-center">
                <FaTiktok className="text-4xl text-orange-900 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-orange-900 mb-2">TikTok</h3>
                <p className="text-orange-800">Descubre nuestros videos más divertidos y creativos</p>
              </div>
              <div className="backdrop-blur-md bg-white/20 rounded-xl p-6 text-center">
                <FaYoutube className="text-4xl text-orange-900 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-orange-900 mb-2">YouTube</h3>
                <p className="text-orange-800">Mira nuestros tutoriales y contenido exclusivo</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
