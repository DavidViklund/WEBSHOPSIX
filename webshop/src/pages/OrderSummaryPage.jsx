import React from "react";
import CheckOut from "../components/CheckOut";

const OrderSummaryPage = ({ cartItems }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Order Summary</h1>
      <CheckOut cartItems={cartItems} />
    </div>
  );
};

export default OrderSummaryPage;
