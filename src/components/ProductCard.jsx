import React from 'react';
import FavoriteIcon from './FavoriteIcon';

import "../styles/product-card.css";

const ProductCard = ({ name, image, price, available, onAddToCart, dataAdded }) => {
    return (
        <div className="product-card">
            <div className="stock-in-details">
                <div className="availability">{available ? 'In stock' : 'on the way...'}</div>
                <div className="favorite-icon"><FavoriteIcon /></div>
            </div>
            <img src={image} alt={name} className="product-image" />
            <div className="product-details">
                <div className="product-name">{name}</div>
                <div className="product-price">{price} UAH</div>
            </div>
            <button className="add-to-cart-button" onClick={onAddToCart}>Добавить в корзину</button>
            <div>
                <div className="data-added">{available? `added ${dataAdded}` : ``}</div>

            </div>

        </div>
    );
};

export default ProductCard;
