import React from 'react';
import { Link } from 'react-router-dom';

import "../styles/header.css";

const Header = () => {
  return (
    <header className='header'>
      <div className='header-title-box'>
        <h3><Link to="/">Shops</Link></h3>
      </div> 
      <div className='header-title-box'>
        <h3><Link to="/cart">Shoping Cart</Link></h3>
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