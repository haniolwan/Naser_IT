import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Header,
  AboutUs,
  Services,
  Contact,
  OurClients,
  Tools
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
    </>
  );
}

export default App;
