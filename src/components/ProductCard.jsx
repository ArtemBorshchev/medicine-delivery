import React, { useState } from 'react';
import FavoriteIcon from './FavoriteIcon';
import "../styles/product-card.css";

const ProductCard = ({ id, name, image, price, available, cart, setCart, dataAdded }) => {
  const [isInCart, setIsInCart] = useState(false);
	const [opacitiColor, setOpacitiColor] = useState('0.2');
  const [clickedIcon, setClickedIcon] = useState(false);
  const addToCart = () => {
    const newProduct = {
      id: id,
      name: name,
      price: price,
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
          {available ? 'In stock' : 'on the way...'}
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
          Delete from Cart
        </button>
      ) : (
        <button className="add-to-cart-button" onClick={addToCart}>
          Add to Cart
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
