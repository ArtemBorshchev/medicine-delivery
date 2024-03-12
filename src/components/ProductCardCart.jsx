import React from 'react';
import CounterWithArrows from './CounterWithArrows';
import '../styles/cartCard.css';

export const ProductCardCart = ({name, image, price, count, cart, setCart, id, countTotalPrice, setTotalCount}) => {
  const deleteFromCart = () => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  
  return (
    <div className="cart-product-card">
      <div className='cart-card-item'>
        <span>count: {count}</span>
      </div>
      <div className='cart-card-item'>
        <img src={image} alt={name} className="cart-product-image" />
      </div>
      <div className='cart-card-item'>
        <div className="cart-product-detail">
          {name}
        </div>
        <div className="cart-product-detail">
          {price} UAH
        </div>
        <div className="cart-product-detail">
          Total price: {price * count} UAH
        </div>
      </div>
      <div className="cart-product-detail">
        <button className="add-to-cart-button" onClick={deleteFromCart}>
          delete from cart
        </button>
      </div>
    <div className='cart-card-item'>
        <CounterWithArrows
          id={id} 
          count={count} 
          cart={cart}
          setCart={setCart}
          countTotalPrice={countTotalPrice}
          setTotalCount={setTotalCount}
        />
    </div>
  </div>
  )
}


export default ProductCardCart;