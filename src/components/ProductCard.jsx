import React from 'react';

import "../styles/product-card.css";

const ProductCard = ({ name, image, price, available, onAddToCart }) => {
    return (
        <div className="product-card">
            <div className="availability">{available ? 'In stock' : 'on the way...'}</div>
            <img src={image} alt={name} className="product-image" />
            <div className="product-details">
                <div className="product-name">{name}</div>
                <div className="product-price">{price} UAH</div>
            </div>
            <button className="add-to-cart-button" onClick={onAddToCart}>Добавить в корзину</button>
        </div>
    );
};

export default ProductCard;
