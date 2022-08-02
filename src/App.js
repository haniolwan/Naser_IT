import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Header,
  AboutUs,
  Services,
  Contact,
  OurClients
} from './components';
function App() {
  return (
    <>
      <Header />
      <OurClients />
      <AboutUs />
      <Services />
      <Contact />
      <AboutUs />

    </>
  );
}

export default App;
