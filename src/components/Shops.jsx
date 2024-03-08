import React, { useState } from 'react';
import ProductCard from './ProductCard';
import medicineIcon from "../medicine_product_item.png";

import "../styles/shops.css";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const Shops = () => {
    const [shop, setShop] = useState([]);
    const [selectedGoods, setSelectedGoods] = useState([]);

    // Реализация загрузки списка магазинов и выбора лекарств

    return (
      <div className="shops-container">
        <div className="left-block">
          Shops list
            {/* Список магазинов */}
        </div>
        <div className="right-block">
          {
            arr.map((el, index) => {
              return (
                <ProductCard 
                key={index}
                dataAdded={'10.01.2024'}
                name={`NAME ${index + 1}`}
                image={medicineIcon}
                price={100}  // пример цены
                available={true} // или false в зависимости от наличия
                onAddToCart={() => console.log('Товар добавлен в корзину')} // пример обработчика события
              />
              )
            })
          }
        <ProductCard 
          name="NAME"
          image={medicineIcon}
          price={100}  // пример цены
          available={true} // или false в зависимости от наличия
          onAddToCart={() => console.log('Товар добавлен в корзину')} // пример обработчика события
        />
            {/* Товары магазина */}
        </div>
  </div>
    );
};

export default Shops;
