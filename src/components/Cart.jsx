import React, { useEffect, useState } from 'react';
import ProductCardCart from './ProductCardCart';
import "../styles/cart.css";

const Cart = ({ cart, setCart, count, setCount}) => {
  
  const [totalCount, setTotalCount] = useState(0)
  useEffect(() => {
    if(cart !== null) {
      setTotalCount(countTotalPrice(cart))
    }
  }, [cart])
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setCart(cart)
    createAndSaveJSONFile(); 
    localStorage.setItem(`${shippingInfo.phone}`, JSON.stringify(cart))
    localStorage.setItem(`${shippingInfo.email}`, JSON.stringify(cart))
    setCart([]);
    setShippingInfo({
      name: '',
      email: '',
      phone: '',
      address: ''
    });
    localStorage.removeItem('cart');
  };
  const countTotalPrice = (cart) => {
    if(cart.length > 0) {
      let totalCost = 0;
      for (let i = 0; i < cart.length; i++) {
        totalCost += +cart[i].count * +cart[i].price;
      } 
      return totalCost;
    }
  }


  const createAndSaveJSONFile = () => {
    fetch(`http://localhost:3001/api/createFile/3333.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cart)
    })
    .then(response => {
      if (response.ok) {
        console.log('File created successfully!');
      } else {
        console.error('Failed to create file!');
      }
    })
    .catch(error => {
      console.error('Error creating file:', error);
    });
  };
  
  return (
    <section className="cart-container">
      <div className="form-container">
        <div className="cart-form-left">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={shippingInfo.name} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={shippingInfo.email} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" value={shippingInfo.phone} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <textarea id="address" name="address" value={shippingInfo.address} onChange={handleInputChange}></textarea>
            </div>
            <div className="form-group">
              <span>Total: {totalCount}
                <button className="submit-button" type="submit">Submit</button>
              </span>
            </div>
          </form>
        </div>
        <div className="cart-items-right">
          {cart?.map(product => (
            <ProductCardCart
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              count={product.count}
              cart={cart}
              setCart={setCart}
              setCount={setCount}
              setTotalCount={setTotalCount}
              countTotalPrice={countTotalPrice}
              
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cart;
