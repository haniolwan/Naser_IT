/* eslint-disable react/jsx-no-constructed-context-values */
import {
  useState,
  useEffect,
  StrictMode,
  React,
} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import WebFont from 'webfontloader';

import {
  AboutUs,
  ContactUs,
  Landing,
  Services,
  SingleService,
  PageNotFound,
} from './components/Pages';
import i18n from './utils/i18n';
import { BackToTopButton, Loading } from './components/common';
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

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Nunito Sans'],
      },
    });
  }, []);

  return (
    <StrictMode>
      <LocaleContext.Provider value={{ locale, setLocale }}>
        {
          !loading
            ? (
              <>
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
                <BackToTopButton />
              </>
            ) : <Loading />
        }
      </LocaleContext.Provider>
    </StrictMode>
  );
}

export default App;
