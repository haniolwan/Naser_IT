import { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Routes, Route } from 'react-router-dom';
import { Landing } from './components/Pages/Landing Page';


function App() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true
    });
  }, [])
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/services" element={
        <h1>Hello Services</h1>
      } />
      <Route path="/about" element={
        <h1>Hello About Us</h1>
      } />
      <Route path="/contact" element={
        <h1>Hello Contact Us</h1>
      } />
    </Routes>
  );
}

export default App;
