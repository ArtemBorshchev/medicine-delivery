import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Shops from "./components/Shops";
import ShoppingCart from "./components/ShopingCart";

function App() {
  return (
      <div>
          <Header />
          <Routes>
              <Route path="/shops" element={<Shops />} />
              <Route path="/cart" element={<ShoppingCart />} />
              {/* Другие маршруты */}
          </Routes>
      </div>
  );
}

export default App;
