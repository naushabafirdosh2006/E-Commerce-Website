import React from 'react';

const Checkout = () => {
  const handleCheckout = () => {
    if (window.confirm('Are you sure you want to place your order?')) {
      alert('Order placed successfully!');
      localStorage.removeItem('cart');
      window.location.href = '/';
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <p>Thank you for your order!</p>
      <button onClick={handleCheckout}>Confirm Order</button>
    </div>
  );
};

export default Checkout;
