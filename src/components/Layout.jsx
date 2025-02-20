import Navbar from './Navbar';
import Footer from './Footer';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-300">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
