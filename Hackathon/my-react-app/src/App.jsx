import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ServiceDiscovery from './pages/ServiceDiscovery.jsx';
import Booking from './pages/Booking.jsx';
import Profile from './pages/Profile.jsx';
import Login from './components/Auth/Login.jsx';
import Register from './components/Auth/Register.jsx';
import CustomerProfile from './components/Profile/CustomerProfile.jsx';
import ProviderProfile from './components/Profile/ProviderProfile.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServiceDiscovery />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/profile/customer" element={<CustomerProfile />} />
        <Route path="/profile/provider" element={<ProviderProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;