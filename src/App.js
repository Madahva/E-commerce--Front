import "./assets/styles/App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import ProductCatalog from "./components/ProductCatalog.jsx";
import DetailsPage from "./components/DetailsPage.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<ProductCatalog />} />
        <Route exact path="/details/:id" element={<DetailsPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
