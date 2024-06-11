import React from 'react';
import Basket from '../components/Basket';

const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {
  return <Basket cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />;
};

export default CartPage;
