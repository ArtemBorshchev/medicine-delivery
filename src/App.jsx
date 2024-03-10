import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Shops from "./components/Shops";
import Cart from "./components/Cart";
import ProductCard from "./components/ProductCard";

function App() {
  const [cart, setCart] = useState([]);
  const [shop, setShop] = useState("shop");
  const [medicineData, setMedicineData] = useState([]);
	const [isNavigated, setIsNavigated] = useState(false);
	const navigate = useNavigate();

  const clickedTextDecor = (elemeentName) => {
		setShop(elemeentName);
  };

  useEffect(() => {
		if (!isNavigated) {
      console.log(isNavigated)
			navigate('/shop');
			setIsNavigated(true);
		}
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/medicine');
				// console.log(response)
        const data = await response.json();
        setMedicineData(data);
				// console.log(data)
      } catch (error) {
        console.error('Ошибка загрузки данных:', error);
      }
    };
    fetchData();
  }, [isNavigated, navigate]);

  return (
		<div>
		<Header 
      setIsNavigated={setIsNavigated} 
      isNavigated={isNavigated}
    />
		<Routes>
				<Route  path="/shop/*" 
                element={
                  <Shops 
                    medicineData={medicineData}
                    shop={shop}
                    setShop={setShop}
                    cart={cart}
                    setCart={setCart}
                    clickedTextDecor={clickedTextDecor}
                    />
                } 
        >
					{
						medicineData.map((el, index) => {
							return(
								<Route path={`${el.name}`} element={<ProductCard oneShop={el}/>} key={index}/>
							)
						})
					}
				</Route>
				<Route path="/cart" element={<Cart />} />
		</Routes>
</div>
  );
}

export default App;