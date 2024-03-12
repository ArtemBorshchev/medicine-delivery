import React, { useState, useEffect } from 'react';
import FavoriteIcon from './FavoriteIcon';
import "../styles/product-card.css";

const ProductCard = ({ id, name, image, price, available, cart, setCart, dataAdded, liked, setLiked }) => {
  const [isInCart, setIsInCart] = useState(false);
  const [isLiked, setIsLiked] = useState(true);
  const [opacitiColor, setOpacitiColor] = useState('0.2');
  const [clickedIcon, setClickedIcon] = useState(false);

  useEffect(() => {
    const foundInCart = cart?.some(item => item.id === id);
    setIsInCart(foundInCart);
  }, []);

  const addToCart = () => {
    const newProduct = {
      id: id,
      count: 1,
      name: name,
      image: image,
      price: price,
      addedToCart: new Date(),
    };
  
    setCart(prevCart => {
      if (!Array.isArray(prevCart)) {
        return [newProduct];
      }
    
      const updatedCart = [...prevCart, newProduct];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  
    setIsInCart(true);
    setOpacitiColor('1');
  };
  
  
  const deleteFromCart = () => {
    const updatedCart = cart.filter(item => item.id !== id);
    console.log("DELET FUNK updatedCart: ", updatedCart);
    setCart(updatedCart);
    console.log("DELET FUNK cart after apdate: ", cart)

    setIsInCart(false);
    setOpacitiColor('0.2');
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="product-card">
      <div className="stock-in-details">
        <div className="availability">
          {available ? 'in stock' : 'will be soon...'}
        </div>
        <div className="favorite-icon">
          <FavoriteIcon
            id={id}
            name={name}
            image={image}
            price={price}
            added={dataAdded}
            isInCart={isInCart} 
            opacitiColor={opacitiColor}
            setOpacitiColor={setOpacitiColor}
            clickedIcon={clickedIcon}
            setClickedIcon={setClickedIcon}
            liked={liked}
            setLiked={setLiked}
            isLiked={isLiked}
            setIsLiked={setIsLiked}
            />
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
