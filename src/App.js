import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Header,
  AboutUs,
  Services,
  Contact,
  OurClients,
  Tools,
  Footer,
  OurProcess
} from './components';
function App() {
  return (
    <>
      <Header />
      <OurClients />
      <AboutUs />
      <OurProcess />
      <Services />
      <Contact />
      <Tools />
      <Footer />
    </>
  );
}

export default App;
