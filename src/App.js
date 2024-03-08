import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Shops from "./components/Shops";
import Cart from "./components/Cart";

function App() {
  return (
      <div>
          <Header />
          <Routes>
              <Route path="/" element={<Shops />} />
              <Route path="/cart" element={<Cart />} />
          </Routes>
      </div>
  );
}

export default App;
