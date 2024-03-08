import React, { useState } from 'react';
import ProductCard from './ProductCard';
import medicineIcon from "../medicine_product_item.png";

import "../styles/shops.css";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const Shops = () => {
    const [shop, setShop] = useState([]);
    const [selectedGoods, setSelectedGoods] = useState([]);

    return (
      <div className="shops-container">
        <div className="left-block">
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
                price={100}
                available={true}
                onAddToCart={() => console.log('Товар добавлен в корзину')}
              />
              )
            })
          }
        </div>
      </div>
    );
};

export default Shops;
