import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Routes, Route, Link } from "react-router-dom";
import Products from "./components/Products.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
