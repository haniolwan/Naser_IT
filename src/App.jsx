import {
  useState,
  useEffect,
} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import {
  AboutUs,
  ContactUs,
  Landing,
  Services,
  SingleService,
  PageNotFound,
} from './components/Pages';
import i18n from './i18n';
import { Loading } from './components/common';
import LocaleContext from './Context/LocaleContext';

function App() {
  const [locale, setLocale] = useState(i18n.language);
  i18n.on('languageChanged', () => setLocale(i18n.language));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loader = setTimeout(() => {
      setLoading(() => !loading);
      return clearTimeout(() => loader);
    }, 700);
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true,
    });
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {
        !loading
          ? (
            <Routes>
              <Route path="/" element={<Landing data-aos="fade-down" />} />
              <Route
                path="/services/ui-design/*"
                element={<SingleService title="Ui Design" />}
              >
                <Route path="*" element={<SingleService />} />
              </Route>
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          ) : <Loading />
      }
    </LocaleContext.Provider>
  );
}

export default App;
