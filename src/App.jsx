import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import "./App.css";

import CoffeMaker from "./assets/images/coffe maker.png";
import Handphone from "./assets/images/handphone.png";
import Headphone from "./assets/images/headphone.png";
import LaptopGaming from "./assets/images/laptop gaming.png";

// Sample data untuk demonstrasi
export const productsData = [
  {
    id: 1,
    name: "Laptop Gaming",
    price: 15000000,
    category: "Electronics",
    image: LaptopGaming,
    description: "High-performance gaming laptop with RTX graphics",
    features: ["16GB RAM", "1TB SSD", "RTX 4060", "Intel i7"],
  },
  {
    id: 2,
    name: "Smartphone",
    price: 5000000,
    category: "Electronics",
    image: Handphone,
    description: "Latest smartphone with advanced camera system",
    features: ["128GB Storage", "5G", "Triple Camera", "AMOLED Display"],
  },
  {
    id: 3,
    name: "Headphones",
    price: 800000,
    category: "Electronics",
    image: Headphone,
    description: "Wireless noise-cancelling headphones",
    features: [
      "Bluetooth 5.0",
      "30hr Battery",
      "Noise Cancelling",
      "Comfort Fit",
    ],
  },
  {
    id: 4,
    name: "Coffee Maker",
    price: 1200000,
    category: "Home",
    image: CoffeMaker,
    description: "Automatic coffee maker with timer",
    features: ["Programmable", "12-cup", "Auto Shut-off", "Water Filter"],
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Header>
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users/:id" element={<UserDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes> */}
          <Routes>
            <Route path="/" element={<Home products={productsData} />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/products"
              element={<Products products={productsData} />}
            />
            <Route
              path="/products/:id"
              element={<ProductDetail products={productsData} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Header>
      </div>
    </Router>
  );
}

export default App;
