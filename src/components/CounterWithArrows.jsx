import React from 'react';

function CounterWithArrows({count, cart, setCart, id, countTotalPrice, setTotalCount}) {
  
  const handleChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    if (newValue >= 1) {
      console.log("new count: ", newValue)
      updateCountInCart(newValue);
      setTotalCount(countTotalPrice(cart));
    } else {
      updateCountInCart(1);
    }
  };

  const updateCountInCart = (newValue) => {
    const updatedCart = cart.map(item => {
      console.log("in map: ", item, id)
      if (item.id === id) {
        return { ...item, count: newValue };
      }
      return item;
    });
    console.log("updateCountInCart: ", updatedCart)
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleIncrement = () => {
    const newValue = count + 1;
    updateCountInCart(newValue);
  };

  const handleDecrement = () => {
    if (count > 1) {
      const newValue = count - 1;
      updateCountInCart(newValue);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={count}
        min="1"
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "ArrowUp") {
            e.preventDefault();
            handleIncrement();
          } else if (e.key === "ArrowDown") {
            e.preventDefault();
            handleDecrement();
          }
        }}
      />
    </div>
  );
}

export default CounterWithArrows;
