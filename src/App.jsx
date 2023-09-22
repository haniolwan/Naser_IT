import { useState, useEffect, React, useMemo } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";

import {
  AboutUs,
  ContactUs,
  Landing,
  Services,
  SingleService,
  PageNotFound,
} from "./components/Pages";
import i18n from "./utils/i18n";
import { BackToTopButton, Loading } from "./components/common";
import LocaleContext from "./Context/LocaleContext";

function App() {
  const [loading, setLoading] = useState(true);
  const [locale, setLocale] = useState(i18n.language);
  i18n.on("languageChanged", () => setLocale(i18n.language));

  useEffect(() => {
    const loader = setTimeout(() => {
      setLoading(() => !loading);
      return clearTimeout(() => loader);
    }, 700);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        families: ["Nunito Sans"],
      },
    });
  }, []);

  const value = useMemo(() => ({ locale, setLocale }), [locale]);

  return (
    <LocaleContext.Provider value={value}>
      {!loading ? (
        <>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/services" element={<Services />} />
            <Route
              path="/services/ui-design/*"
              element={<SingleService title="Ui Design" />}
            >
              <Route path="*" element={<SingleService />} />
            </Route>
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <BackToTopButton />
        </>
      ) : (
        <Loading />
      )}
    </LocaleContext.Provider>
  );
}

export default App;
