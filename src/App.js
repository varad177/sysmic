import { useRef } from "react";
import "./App.css";
import Ability from "./components/ability/Ability";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import GoToTopButton from "./components/GoToTopBtn/TopBtn";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import Services from "./components/services/Services";
function App() {
  const globalStyles = {
    "*": {
      boxSizing: "border-box",
      overflow :"hidden",
      margin :'0',
      padding :'0',
      width : '100vw',
      overflow : 'hidden'
    },
  };


  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const abilityRef = useRef(null);



  return (
    <div className="App" style={globalStyles}>
      <Nav about={aboutRef} service={serviceRef} ability={abilityRef} />
      <Home />
      <About ref={aboutRef}/>
      <Services ref ={serviceRef}/>
      <Ability ref={abilityRef} />
      <Footer/>
      <GoToTopButton />
    </div>
  );
}

export default App;


