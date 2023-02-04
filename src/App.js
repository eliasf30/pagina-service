
import './App.css';
import About from './Components/About/about';
import Contactos from './Components/contactos/contactos';
import Hero from './Components/hero/hero';
import Navbar from './Components/navbar/navbar';
import Servicios from './Components/servicios/servicios.jsx';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Servicios/>
      <Contactos/>
      
      
    </div>
  );
}

export default App;
