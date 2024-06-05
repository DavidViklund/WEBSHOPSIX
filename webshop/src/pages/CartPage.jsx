import React from "react";
import Basket from "../components/Basket";
import { useNavigate } from "react-router-dom";

const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/OrderSummaryPage");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <Basket
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
      <button
        onClick={handleCheckout}
        className="bg-blue-500 text-white rounded p-2 mt-4"
      >
        Proceed to Order Summary
      </button>
    </div>
  );
};

export default CartPage;
