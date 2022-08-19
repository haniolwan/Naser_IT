import {
  useState,
  useEffect
} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  Routes,
  Route
} from 'react-router-dom';
import {
  AboutUs,
  ContactUs,
  Landing,
  Services,
  SingleService
} from './components/Pages/';

import { Loading } from './components/common';



function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loader = setTimeout(() => {
      setLoading(false);
    }, 550)
    return () => clearTimeout(loader);
  }, [])

  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true
    });
  }, [])
  return (
    loading ?
      <Loading />
      : <Routes>
        <Route path="/" element={<Landing data-aos="fade-down" />} />
        <Route path="/services/ui-design/*" element={<SingleService title="Ui Design" />} >
          <Route path="*" element={<SingleService />} />
        </Route>
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

  );
}

export default App;
