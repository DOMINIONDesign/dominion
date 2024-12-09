import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import AboutUs from './components/AboutUs';
// import Services from './components/Services';
import Footer from './components/Footer';
// import ContactUs from './components/ContactUs';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
    // Refresh AOS on route change
    AOS.refresh();
  }, []); // Dependency array with location to trigger on route change
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="*" element={<Home />} />
          {/* <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} /> */}
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
