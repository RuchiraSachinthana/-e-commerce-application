import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home.jsx';
import  Navbar  from './components/Navbar/Navbar.jsx';
import { Routes, Route, Link } from "react-router-dom";
import Products from './components/Products.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
     <Navbar/>
    
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
     
     <Footer/>
    </>
  );
}

export default App; 

