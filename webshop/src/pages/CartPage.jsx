//sida för vår varukorg
import React from "react";
import Basket from "../components/Basket";

const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {
  return (
    <div className="flex flex-col">
      <Basket
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
    </div>
  );
};

export default CartPage;
