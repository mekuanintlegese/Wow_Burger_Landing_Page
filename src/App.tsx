import { About } from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./components/Shop/Shop";
import Blog from "./components/Blog/Blog";
import Intro from "./components/Intro/Intro";
import Delivery from "./components/Delivery/Delivery";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Shop />
      <Delivery />
      <Testimonials />
      <Intro />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
