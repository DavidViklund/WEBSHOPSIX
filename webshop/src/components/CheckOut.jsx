//Checkout
import React, { useState, useEffect } from "react";
import Button from "./buttons/Button";
import { useCheckout } from "../context/CheckoutProvider";

const CheckOut = () => {
  const { orderSummaryItems } = useCheckout();
  const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    const generateOrderNumber = () => Math.floor(Math.random() * 1000000);
    setOrderNumber(generateOrderNumber());
  }, []);

  const getTotalPrice = () => {
    return orderSummaryItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex flex-col">
        <h4 className="font-bold mb-2">Thank you for your purchase!</h4>
        <p className="font-bold text-center mb-8">
          Order number: #{orderNumber}
        </p>
      </div>
      <div className="max-w-[1440px] text-center p-4 border border-greyscale-border-default rounded-xl bg-greyscale-surface-subtle">
        {orderSummaryItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="flex flex-col justify-start">
            {orderSummaryItems.map((item) => (
              <div key={item.id} className="flex mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-white rounded-lg border border-greyscale-border-default">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                  <div className="max-w-[300px] text-left">
                    <p className="font-bold">{item.title}</p>
                    <p>Qty: {item.quantity}</p>
                    <p>{item.price}$</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex flex-col justify-start my-4">
              <p className="font-bold text-right">
                Order total: {getTotalPrice()}$
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center justify-center py-4">
        <Button
          to="/"
          text={"Back to start"}
          icon={<span className="material-symbols-outlined">home</span>}
        />
      </div>
    </div>
  );
};

export default CheckOut;
