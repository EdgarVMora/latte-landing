import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="backdrop-blur-md bg-white/30 fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img src="https://placehold.co/120x40?text=Latte" alt="Latte" className="h-8" />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-orange-900 hover:text-orange-700">Menú</Link>
          <Link to="/rewards" className="text-orange-900 hover:text-orange-700">Recompensas</Link>
          <Link to="/location" className="text-orange-900 hover:text-orange-700">Localizanos</Link>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600">
            Únete Ahora
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;