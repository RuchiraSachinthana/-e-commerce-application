import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Routes, Route, Link } from "react-router-dom";
import Products from "./components/Products.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Product from "./components/Product";
import Contact from "./components/Contact";
import About from "./components/About";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<Product />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
