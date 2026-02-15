import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./common/Header";
import Home from "./pages/Home";
import Footer from "./common/Footer";
import ShopPage from "./pages/ShopPage";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { ToastContainer } from 'react-toastify';
import Login from "./pages/Login";
import Register from "./pages/Register";
import "react-toastify/dist/ReactToastify.css";
import Teams from "./pages/Teams";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./pages/Profile";
import Basket from "./pages/Basket";
import PlaceOrder from "./pages/PlaceOrder";
import OrderSuccess from "./pages/OrderSuccess";
function App() {
  return (
    <>
      <Header />
      <ToastContainer></ToastContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/shop/:gender" element={<ShopPage />} />
        <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/basket" element={<Basket />} />
         <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/profile" element={<PrivateRoute>
          <Profile></Profile>
        </PrivateRoute>} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
