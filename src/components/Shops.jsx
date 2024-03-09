import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import medicineIcon from "../medicine_product_item.png";
import "../styles/shops.css";

const Shops = ({medicineData}) => {
  // console.log("DATA", medicineData)
  const [shop, setShop] = useState("shop");
  const [selectedGoods, setSelectedGoods] = useState([]);

  return (
    <div className="shops-container">
      <div className="left-block">
        {
          medicineData.map((el, index) => {
            return(
              <div className='shop-item' key={el.id}>
                <h3 onClick={() => setShop(el.name)}>
                  <Link to={el.name}>{el.name}</Link>
                </h3>
              </div>
              )
            }) 
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
