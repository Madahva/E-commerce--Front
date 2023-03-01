import "./assets/styles/App.css";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import ProductCatalog from "./components/ProductCatalog/ProductCatalog";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { DashBoardProducts } from "./components/DashBoardProducts/DashBoardProducts";
import { DashBoardCategories } from "./components/DashBoardCategories/DashBoardCategories";
const App = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/dashboard" && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<ProductCatalog />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/:category/:id" element={<DetailsPage />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard-products" element={<DashBoardProducts />} />
        <Route path="/dashboard-categories" element={<DashBoardCategories />} />
      </Routes>
      {location.pathname !== "/dashboard" && <Footer />}
    </div>
  );
};

export default App;
