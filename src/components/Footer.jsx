const Footer = () => {
  return (
    <footer className="bg-orange-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Sobre Nosotros</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-300">Nuestra Historia</a></li>
              <li><a href="#" className="hover:text-orange-300">Carreras</a></li>
              <li><a href="#" className="hover:text-orange-300">Inversores</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Atención al Cliente</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-300">Contacto</a></li>
              <li><a href="#" className="hover:text-orange-300">FAQs</a></li>
              <li><a href="#" className="hover:text-orange-300">Ayuda</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-300">Privacidad</a></li>
              <li><a href="#" className="hover:text-orange-300">Términos</a></li>
              <li><a href="#" className="hover:text-orange-300">Cookies</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-300"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-orange-300"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-orange-300"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-orange-800 text-center">
          <p>&copy; 2024 Latte. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;