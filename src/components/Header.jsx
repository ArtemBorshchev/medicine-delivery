import React, { useState } from 'react';
import { Link, useHref } from 'react-router-dom';

import "../styles/header.css";

const Header = () => {
  const currentURL = useHref().substring(1);
  const [underLine, setUnderline] = useState("Shops");
  const clickedTextDecor = (element) => {
    setUnderline(element);
  };

  return (
    <header className="header">
      <div className="header-title-box">
        {
          underLine === "Shops" ?
          <h3 onClick={() => clickedTextDecor("Shops")}
              style={{ textDecoration: underLine === "Shops" ? 'underline solid #29a745' : 'none' }}>
              <Link to={currentURL} >Shops</Link>
          </h3>
          :
          <h3 onClick={() => clickedTextDecor("Shops")}
              style={{ textDecoration: underLine === "Shops" ? 'underline solid #29a745' : 'none' }}>
          <Link to="/shop/*">Shops</Link>
          </h3>
        }
      </div> 
      <div className="header-title-box">
        <h3 onClick={() => clickedTextDecor("Cart")}
            style={{ textDecoration: underLine === "Cart" ? 'underline solid #29a745' : 'none' }}>
          <Link to="/cart">Cart</Link>
        </h3>
      </div>
    </header>
  );
};

export default Header;

// async function fetchFDAProducts() {
//   try {
//       const response = await fetch('https://api.fda.gov/drug/drugsfda.json?search=Products.marketing_status="Discontinued"&limit=10');
//       if (!response.ok) {
//           throw new Error('Ошибка запроса к API FDA');
//       }
//       const data = await response.json();
//       return data.results; // Здесь предполагается, что результаты находятся в массиве results
//   } catch (error) {
//       console.error('Ошибка при получении списка продуктов:', error);
//       return null;
//   }
// }

// async function fetchData() {
//   const products = await fetchFDAProducts();
//   if (products) {
//       console.log('Список продуктов:', products);
//       // Обработка полученных данных
//   } else {
//       console.log('Не удалось получить список продуктов.');
//   }
// }

// fetchData();