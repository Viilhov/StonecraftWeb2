import "./App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav.jsx";
import Photogallery from "./components/Photogallery.jsx";
import Music from "./components/Music.jsx";
import About from "./components/About.jsx";
import Video from "./components/Video.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <Photogallery />
      <Music />
      <About />
      <Video />
      <Footer />
    </>
  );
}
