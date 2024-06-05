import React from "react";
import CheckOut from "../components/CheckOut";

const OrderSummaryPage = ({ cartItems }) => {
  return (
    <div className="container mx-auto p-4">
      <CheckOut cartItems={cartItems} />
    </div>
  );
};

export default OrderSummaryPage;
