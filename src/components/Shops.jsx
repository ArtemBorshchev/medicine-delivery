import React, { useState } from 'react';
import { Link, Route, useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import medicineIcon from "../medicine_product_item.png";

import EachShop from './EachShop';

import "../styles/shops.css";

const Shops = ({medicineData}) => {
  // console.log("DATA", medicineData)
    const [shop, setShop] = useState("shop");
    const [selectedGoods, setSelectedGoods] = useState([]);

    return (
      <div className="shops-container">
        <div className="left-block">
          {/* {
            medicineData.map((el, index) => {
              return(
                <div className='shop-item' key={el.id}>
                  <h3 onClick={() => setShop(el.name)}>
                    <Link>{el.name}</Link>
                  </h3>
                </div>
                )
              })
            } */}

          {
            medicineData.map((el, index) => {
              // console.log(el)
              return (
                <EachShop name={el.name} key={el.id} onClick={() => setShop(el.name)}/>
              )
              }
            )
          }
          
        </div>
        <div className="right-block">

          { 
            medicineData.filter((el) => el.name === shop)
            .map((element) => element.medications.map((medication, index) => {
              return (
                <ProductCard 
                key={medication.id}
                dataAdded={medication.added}
                name={medication.name}
                image={medicineIcon}
                price={medication.price}
                available={true}
                onAddToCart={() => console.log('Товар добавлен в корзину')}
              />
              )
            }))
          }
        </div>
      </div>
    );
    
};

export default Shops;
