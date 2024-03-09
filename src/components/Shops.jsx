import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import medicineIcon from "../medicine_product_item.png";

import "../styles/shops.css";

const Shops = ({medicineData}) => {

  const [cart, setCart] = useState([]);
  console.log(cart)
  const [shop, setShop] = useState("shop");
  
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
      medicineData.filter((elName) => elName.name === shop).map((oneShop) => 
        oneShop.medications.map((products) => (
          <ProductCard 
            key={products.id}
            dataAdded={products.added}
            name={products.name}
            image={medicineIcon}
            price={products.price}
            available={true}
            setCart={setCart}
          />
        ))
      )
    }
      </div>
    </div>
  );
    
};

export default Shops;