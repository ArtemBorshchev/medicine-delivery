import React, { useState, useEffect } from 'react';
import FavoriteIcon from './FavoriteIcon';
import "../styles/product-card.css";

const ProductCard = ({ id, name, image, price, available, cart, setCart, dataAdded }) => {
  const [isInCart, setIsInCart] = useState(false);
  const [opacitiColor, setOpacitiColor] = useState('0.2');
  const [clickedIcon, setClickedIcon] = useState(false);

  useEffect(() => {
    const foundInCart = cart.some(item => item.id === id);
    setIsInCart(foundInCart);
  }, [cart, id]);

  const addToCart = () => {
    const newProduct = {
      id: id,
      name: name,
      image: image,
      price: price,
      available: true,
      addedToCart: new Date(),
    };
    setCart([...cart, newProduct]);
    setIsInCart(true);
    setOpacitiColor('1');
    console.log("cart: ", cart)
  };

  const deleteFromCart = () => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    setIsInCart(false);
    setOpacitiColor('0.2');
  };

  return (
    <div className="product-card">
      <div className="stock-in-details">
        <div className="availability">
          {available ? 'in stock' : 'will be soon...'}
        </div>
        <div className="favorite-icon">
          <FavoriteIcon 
            isInCart={isInCart} 
            opacitiColor={opacitiColor}
            setOpacitiColor={setOpacitiColor}
            clickedIcon={clickedIcon}
            setClickedIcon={setClickedIcon}/>
        </div>
      </div>
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <div className="product-name">
          {name}
        </div>
        <div className="product-price">
          {price} UAH
        </div>
      </div>

      {isInCart ? (
        <button className="add-to-cart-button" onClick={deleteFromCart}>
          remove
        </button>
      ) : (
        <button className="add-to-cart-button" onClick={addToCart}>
          add to cart
        </button>
      )}

      <div>
        <div className="data-added">
          {available ? `added ${dataAdded}` : ``}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
