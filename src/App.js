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
  Landing
  , Services
} from './components/Pages/';
import SingleService from './components/Pages/SingleService';
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
        <Route path="/" element={<Landing />} />
        <Route path="/ui-design/*" element={<SingleService title="Ui Design" />} >
          <Route path="*" element={<SingleService />} />
        </Route>
        <Route path="/services" element={<Services />} />
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
