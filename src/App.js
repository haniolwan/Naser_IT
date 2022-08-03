import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Header,
  AboutUs,
  Services,
  Contact,
  OurClients,
  Tools,
  Footer
} from './components';
function App() {
  return (
    <>
      <Header />
      <OurClients />
      <AboutUs />
      <Services />
      <Contact />
      <Tools />
      <Footer />
    </>
  );
}

export default App;
