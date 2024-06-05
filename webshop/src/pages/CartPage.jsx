import React from "react";
import Basket from "../components/Basket";

const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping cart</h1>
      <Basket
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
    </div>
  );
};

export default CartPage;
