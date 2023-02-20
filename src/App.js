import "./assets/styles/App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./components/Home/Home.jsx";
import ProductCatalog from "./components/ProductCatalog/ProductCatalog.jsx";
import DetailsPage from "./components/DetailsPage/DetailsPage.jsx";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Login from "./components/Login/Login.jsx";
import SignUp from "./components/SignUp/SignUp.jsx"

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:category" element={<ProductCatalog />} />
        <Route exact path="/log-in" element={<Login />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/:category/:id" element={<DetailsPage />} />
        <Route exact path="/shoppingCart" element={<ShoppingCart />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
