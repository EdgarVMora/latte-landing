import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="backdrop-blur-xl bg-orange-950/30 fixed w-full z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        {/* Desktop & Mobile container */}
        <div className="flex items-center justify-between">
          {/* Logo - visible en todas las resoluciones */}
          <Link to="/" className="relative z-50">
            <img 
              src="https://placehold.co/120x40?text=Latte" 
              alt="Latte" 
              className="h-8 hover:opacity-80 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between flex-1 pl-12">
            {/* Left Menu Items */}
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-orange-300 transition-colors">
                Menú
              </Link>
              <Link to="/rewards" className="text-white hover:text-orange-300 transition-colors">
                Recompensas
              </Link>
            </div>

            {/* Right Menu Items */}
            <div className="flex items-center space-x-8">
              <Link to="/location" className="text-white hover:text-orange-300 transition-colors">
                Localízanos
              </Link>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 shadow-md">
                Únete Ahora
              </button>
            </div>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative z-50 p-2 text-white hover:text-orange-300 transition-colors"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-4 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`
          lg:hidden fixed inset-0 
          bg-gradient-to-br from-orange-900 to-orange-950
          backdrop-blur-2xl
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          pt-24 shadow-2xl
        `}>
          <div className="container mx-auto px-6">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="backdrop-blur-md bg-white/10 text-white text-2xl 
                           hover:bg-white/20 transition-all duration-300
                           rounded-xl p-4 shadow-lg border border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Menú
              </Link>
              <Link 
                to="/rewards" 
                className="backdrop-blur-md bg-white/10 text-white text-2xl 
                           hover:bg-white/20 transition-all duration-300
                           rounded-xl p-4 shadow-lg border border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Recompensas
              </Link>
              <Link 
                to="/location" 
                className="backdrop-blur-md bg-white/10 text-white text-2xl 
                           hover:bg-white/20 transition-all duration-300
                           rounded-xl p-4 shadow-lg border border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Localízanos
              </Link>
              <button 
                className="bg-orange-500 text-white text-2xl px-6 py-4 
                           rounded-xl hover:bg-orange-600 transform hover:scale-105 
                           transition-all duration-300 shadow-lg
                           border-2 border-orange-400/30"
                onClick={() => setIsMenuOpen(false)}
              >
                Únete Ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;