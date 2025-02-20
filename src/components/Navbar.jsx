import { Coffee, MapPin } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-2 lg:px-16">
        
        {/* Menú principal (siempre visible) */}
        <nav className="flex items-center gap-6">
          <a className="text-primary text-sm font-medium hover:text-primary-dark transition-colors duration-200" href="#">
            Menú
          </a>
          <a className="text-primary text-sm font-medium hover:text-primary-dark transition-colors duration-200" href="#">
            Rewards
          </a>
          <a className="flex items-center gap-1 text-primary text-sm font-medium hover:text-primary-dark transition-colors duration-200" href="#">
            <MapPin size={16} /> Localizar tienda
          </a>
        </nav>

        {/* Logo (centrado) */}
        <div className="flex flex-1 justify-center items-center gap-2">
          <Coffee size={24} className="text-primary" />
          <h2 className="text-primary text-lg font-bold tracking-tight">
            Latte
          </h2>
        </div>

        {/* Botones de acción */}
        <div className="flex gap-4">
          <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-primary transition-all duration-200">
            Ingresar
          </button>
          <button className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary-dark focus:ring-2 focus:ring-primary-dark transition-all duration-200">
            Unirte
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;