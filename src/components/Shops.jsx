import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import medicineIcon from "../medicine_product_item.png";

import "../styles/shops.css";

const Shops = ({medicineData, shop, cart, setCart, clickedTextDecor, liked, setLiked}) => {

  return (
    <div className="shops-container">
      <div className="left-block">
        {
          medicineData.map((el, index) => {
            return(
              <div className='shop-item' key={el.id}>
                 <h3 onClick={() => clickedTextDecor(el.name)}
                    style={{ textDecoration: shop === el.name ? 'underline solid #29a745' : 'none' }}>
                  <Link to={el.name}>{el.name}</Link>
                </h3>
              </div>
              )
            }) 
        }
        
      </div>
      <div className="right-block">
      {
        liked?.map((likedAddedProducts) => 
          <ProductCard 
          key={likedAddedProducts.id}
          id={likedAddedProducts.id}
          name={likedAddedProducts.name}
          image={medicineIcon}
          price={likedAddedProducts.price}
          available={true}
          setCart={setCart}
          cart={cart}
          liked={liked}
          setLiked={setLiked}
          />
        )
      }
      {
      medicineData.filter((elName) => elName.name === shop).map((oneShop) => 
        oneShop.medications.map((products) => (
          <ProductCard 
            key={products.id}
            id={products.id}
            dataAdded={products.added}
            name={products.name}
            image={medicineIcon}
            price={products.price}
            available={true}
            setCart={setCart}
            cart={cart}
            liked={liked}
            setLiked={setLiked}
          />
        ))
      )
    }
      </div>
    </div>
  );
    
};

export default Shops;