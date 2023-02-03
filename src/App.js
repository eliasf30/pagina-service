
import './App.css';
import About from './Components/About/about';
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
      
      <div style={{display:"flex", backgroundColor:"black", height:"70vh"}}><p>a</p></div>
    </div>
  );
}

export default App;
