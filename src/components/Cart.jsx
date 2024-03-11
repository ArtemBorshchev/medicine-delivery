import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import "../styles/cart.css";

const Cart = ({ cart, setCart, liked, setLiked }) => {
  
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
    createAndSaveJSONFile(); // Вызываем функцию для создания и сохранения файла JSON
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

  // Функция для создания и сохранения файла JSON
  const createAndSaveJSONFile = () => {
    const fileName = `${shippingInfo.phone}.json`; // Используем номер телефона для имени файла
    const fileContent = JSON.stringify(cart); // Преобразуем массив cart в JSON-строку

    // Отправляем запрос на сервер для создания файла
    fetch(`http://localhost:3001/api/createFile/${shippingInfo.phone}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cart)
    })
    .then(response => {
      if (response.ok) {
        console.log('File created successfully!');
        // Здесь можно добавить дополнительную обработку, если необходимо
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
              <button className="submit-button" type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div className="cart-items-right">
          {cart?.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              available={product.available}
              dataAdded={product.addedToCart}
              cart={cart}
              setCart={setCart}
              liked={liked}
              setLiked={setLiked}
            />
          ))}
        </div>
      </div>
      <div>
        <button>
          <h4>
            <Link to="/cart/history">history of shoping</Link>
          </h4>
        </button>
      </div>
    </section>
  );
};

export default Cart;
