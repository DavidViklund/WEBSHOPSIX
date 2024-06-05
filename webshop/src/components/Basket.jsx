import React from "react";
import DeleteButton from "./buttons/DeleteButton";
import SuccessButton from "./buttons/SuccessButton";
import { useNavigate } from "react-router-dom";

const Basket = ({ cartItems, removeFromCart, updateQuantity }) => {
  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/OrderSummaryPage");
  };

  return (
    <div className=" w-full ">
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className=" grid justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="w-[360px] p-4 flex flex-col bg-greyscale-surface-subtle border border-greyscale-border-default rounded-xl"
            >
              <div className="flex items-center justify-center bg-white rounded-lg border border-greyscale-border-default">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[250px] object-contain"
                />
              </div>
              <div className="flex flex-col justify-between flex-grow mt-4">
                <div className="flex justify-between items-start space-x-2 mb-4">
                  <h5 className="font-bold">
                    {item.title.split(" ").slice(0, 4).join(" ")}
                  </h5>
                  <p className="font-medium">{item.price}$</p>
                </div>
                <div className="flex justify-between items-center">
                  <DeleteButton
                    onClick={() => removeFromCart(item.id)}
                    text={"Remove"}
                    icon={
                      <span className="material-symbols-outlined">delete</span>
                    }
                    className="m-2"
                  ></DeleteButton>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-greyscale-surface-default w-10 h-10 flex items-center justify-center border border-greyscale-border-default rounded-lg hover:bg-error-surface-lighter"
                    >
                      <span className="material-symbols-outlined">remove</span>
                    </button>
                    <span className="bg-greyscale-surface-subtle w-12 h-12 font-medium text-lg flex items-center justify-center border border-greyscale-border-default rounded-lg">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-greyscale-surface-default w-10 h-10 flex items-center justify-center border border-greyscale-border-default rounded-lg hover:bg-success-surface-lighter"
                    >
                      <span className="material-symbols-outlined">add</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className=" flex flex-col text-left">
            <div className=" flex flex-col">
              <h4>Total: </h4>
              <h5>{getTotalPrice()}$</h5>
            </div>
            <div className="flex items-center justify-start">
              <SuccessButton
                onClick={handleCheckout}
                to="/OrderSummaryPage"
                text={"Pay now"}
              ></SuccessButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;
