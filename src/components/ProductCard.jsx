import React, { useState } from 'react';
import FavoriteIcon from './FavoriteIcon';

import "../styles/product-card.css";

const ProductCard = ({setCart, name, image, price, available, dataAdded }) => {

	const addToCart = () => {
    console.log("Adding to cart:", name);
    setCart(prevCart => {
        const newProduct = {
            name: name,
            image: image,
            price: price,
            added: dataAdded,
            available: available,
            liked: true
        };
        return [...prevCart, newProduct]; 
    });
	};
	return (
		<div className="product-card">
			<div className="stock-in-details">
				<div className="availability">{available ? 'In stock' : 'on the way...'}</div>
				<div className="favorite-icon">{available ? <FavoriteIcon /> : ''}</div>
			</div>
			<img src={image} alt={name} className="product-image" />
			<div className="product-details">
				<div className="product-name">{name}</div>
				<div className="product-price">{price} UAH</div>
			</div>
			<button className="add-to-cart-button" onClick={addToCart}>Add to Cart</button>
			<div>
				<div className="data-added">{available ? `added ${dataAdded}` : ``}</div>
			</div>
		</div>
	);
};

export default ProductCard;
