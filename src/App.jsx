import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Rewards from './pages/Rewards';
import Location from './pages/Location';
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
