import "./assets/styles/App.css";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import ProductCatalog from "./components/ProductCatalog/ProductCatalog";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { DashBoardProducts } from "./components/DashBoardProducts/DashBoardProducts";
import { DashBoardCategories } from "./components/DashBoardCategories/DashBoardCategories";
import { DashCreateProduct } from "./components/DashCreateProduct/DashCreateProduct";
import { DashCreateCategory } from "./components/DashCreateCategory/DashCreateCategory";
// import { CloudinaryUpload} from "./components/Cloudinary/Cloudinary";
const App = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/dashboard" &&  location.pathname !== "/dashboard-products"
      &&  location.pathname !== "/dashboard-categories" && location.pathname !== "/dashboard-create-products" 
      && location.pathname !== "/dashboard-create-category" && <NavBar/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<ProductCatalog />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/:category/:id" element={<DetailsPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard-products" element={<DashBoardProducts />} />
        <Route path="/dashboard-categories" element={<DashBoardCategories />} />
        {/* <Route path="/dashboard-create-products" element={<CloudinaryUpload />} /> */}
        <Route path="/dashboard-create-products" element={<DashCreateProduct />} />
        <Route path="/dashboard-create-category" element={<DashCreateCategory />} />

      </Routes>
      {location.pathname !== "/dashboard" && <Footer />}
    </div>
  );
};

export default App;
