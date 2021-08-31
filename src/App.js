import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Curriculum from "./components/Curriculum";
import Studies from "./components/Studies";



function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 40,
              density: {
                enable: true,
                value_area: 800
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 4,
                color: "#f9ab00"
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Curriculum />
      <Studies />
      <Footer />
    </>
  );
}

export default App;
