import React from 'react';
import { Link } from 'react-router-dom';

export const EachShop = ({name}) => {
  // console.log("name from eachShop", name);
  return (
    <div className='shop-item'>
      <h3>
        <Link to={name}>{name}</Link>
      </h3>
    </div>
  )
}

export default EachShop
