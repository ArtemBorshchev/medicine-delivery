import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Shops from "./components/Shops";
import Cart from "./components/Cart";

function App() {
  const [medicineData, setMedicineData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/medicine');
				console.log(response)
        const data = await response.json();
        setMedicineData(data);
				console.log(data)
      } catch (error) {
        console.error('Ошибка загрузки данных:', error);
      }
    };

    fetchData();
  }, []);

  return (
      <div>
          <Header />
          <Routes>
              <Route path="/" element={<Shops medicineData={medicineData}/>} />
              <Route path="/cart" element={<Cart />} />
          </Routes>
      </div>
  );
}

export default App;
