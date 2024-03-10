import React, { useState } from 'react';
import "../styles/cart.css";

const Cart = ({ items }) => {
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
    console.log('smth to server:', shippingInfo);
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
          </form>
        </div>
        <div className="cart-items-right">
        </div>
      </div>
      <div className="button-container">
        <button className="submit-button" type="submit" onClick={handleSubmit}>Submit</button>
      </div>
    </section>
  );
};

export default Cart;