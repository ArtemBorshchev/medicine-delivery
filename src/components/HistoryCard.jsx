import React, { useState } from 'react';


export const HistoryCard = ({count, name, image, price, dataAdded}) => {
  
  return (
    <div className="history-product-card">
      <span>{count}</span>
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <div className="product-name">
          {name}
        </div>
        <div className="product-price">
          {price} UAH
        </div>
      </div>
      <div>
        <div className="data-added">
          {dataAdded}
        </div>
      </div>
    </div>

  )
}

export default HistoryCard;