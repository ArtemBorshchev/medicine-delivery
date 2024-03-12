import React, { useState } from 'react';
import { Link, useHref } from 'react-router-dom';

import "../styles/header.css";

const Header = () => {
  const currentURL = useHref().substring(1);
  const [underLine, setUnderline] = useState("Shops");
  const clickedTextDecor = (element) => {
    setUnderline(element);
  };

  return (
    <header className="header">
      <div className="header-title-box">
        {
          underLine === "Shops" ?
          <h3 onClick={() => clickedTextDecor("Shops")}
              style={{ textDecoration: underLine === "Shops" ? 'underline solid #29a745' : 'none' }}>
              <Link to={currentURL} >Shops</Link>
          </h3>
          :
          <h3 onClick={() => clickedTextDecor("Shops")}
              style={{ textDecoration: underLine === "Shops" ? 'underline solid #29a745' : 'none' }}>
          <Link to="/shop/*">Shops</Link>
          </h3>
        }
      </div> 
      <div className="header-title-box">
        <h3 onClick={() => clickedTextDecor("Cart")}
            style={{ textDecoration: underLine === "Cart" ? 'underline solid #29a745' : 'none' }}>
          <Link to="/cart">Cart</Link>
        </h3>
      </div>
      <div className="header-title-box">
        <h3 onClick={() => clickedTextDecor("History")}
            style={{ textDecoration: underLine === "History" ? 'underline solid #29a745' : 'none' }}>
           <Link to="/history">History</Link>
        </h3>
      </div>
    </header>
  );
};

export default Header;
