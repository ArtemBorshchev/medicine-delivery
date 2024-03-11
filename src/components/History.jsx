import React, { useState } from 'react';
import HistoryCard from './HistoryCard';
import '../styles/history.css';

const History = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    console.log(phoneNumber)
  
    if (phoneNumber) {
      const phoneData = JSON.parse(localStorage.getItem(phoneNumber));
      console.log(phoneData)
      if (phoneData) {
        setSearchResults(phoneData);
        console.log(searchResults)
      }
    }

    if (email) {
      const emailData = JSON.parse(localStorage.getItem(email));
      if (emailData) {
        setSearchResults(emailData);
      }
    }
  };

  return (
    <div className="history-container">
      <div className="history-search-top">
          <div className="search-group">
            <label htmlFor="phone">Phone:</label>
            <input type="text" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </div>
          <div className="search-group">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="search-group">
            <button className="submit-button" onClick={handleSearch}>Submit</button>
          </div>
      </div>
      <div className="hystory-items-bottom">
        {searchResults?.map(product => (
          <HistoryCard
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            dataAdded={product.addedToCart}
          />
        ))}
      </div>
    </div>
  )
};

export default History;
