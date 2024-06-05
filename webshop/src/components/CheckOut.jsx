import React, { useState, useEffect } from "react";
import Button from "./buttons/Button";

const CheckOut = ({ cartItems }) => {
  const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    const generateOrderNumber = () => Math.floor(Math.random() * 1000000);
    setOrderNumber(generateOrderNumber());
  }, []);

  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };
  return (
    <div className=" flex items-center justify-center">
      <div className=" max-w-[1440px] text-center p-4 border border-greyscale-border-default rounded-xl bg-greyscale-surface-subtle">
        <p className=" font-bold text-center my-4">
          Order number: #{orderNumber}
        </p>
        <h4 className="font-bold mb-4">Thank you for your purchase!</h4>
        <p className="my-4">
          Please check your e-mail for an order confirmation.
        </p>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className=" flex flex-col justify-start">
            {cartItems.map((item) => (
              <div key={item.id} className="flex mb-4">
                <div className=" flex items-start gap-4">
                  <div className=" p-4 bg-white rounded-lg border border-greyscale-border-default">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                  <div className=" max-w-[300px] text-left ">
                    <p className="font-bold">{item.title}</p>
                    <p>Qty: {item.quantity}</p>
                    <p>{item.price}$</p>
                  </div>
                </div>
              </div>
            ))}
            <div className=" flex flex-col justify-start my-4">
              <p className=" font-bold">Order total: {getTotalPrice()}$</p>
            </div>
            <div className=" flex items-center justify-center">
              <Button to="/" text={"Back to shopping"} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default CheckOut;
