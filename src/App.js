import "./assets/styles/App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./components/Home/Home.jsx";
import ProductCatalog from "./components/ProductCatalog/ProductCatalog.jsx";
import DetailsPage from "./components/DetailsPage/DetailsPage.jsx";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/categories/:id" element={<ProductCatalog />} />
        <Route exact path="/details/:id" element={<DetailsPage />} />
        <Route exact path="/ShoppingCart" element={<ShoppingCart />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
