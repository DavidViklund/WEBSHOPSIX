import React from "react";
import Button from "./buttons/Button";
import DeleteButton from "./buttons/DeleteButton";
import SuccessButton from "./buttons/SuccessButton";
import BackButton from "./buttons/BackButton";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../context/CheckoutProvider";

const Basket = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    removeAllFromCart,
    setOrderSummaryItems,
  } = useCheckout();
  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const navigate = useNavigate();

  const handleCheckout = () => {
    setOrderSummaryItems(cartItems); // Store cart items in order summary
    removeAllFromCart(); // Clear the cart
    navigate("/summary");
  };

  return (
    <div className="w-full flex justify-center lg:m-8">
      <div className=" flex flex-col gap-8  max-w-[1440px]  px-4 md:px-8 lg:px-40">
        <div className="flex">
          <BackButton
            to={"/"}
            icon={<span className="material-symbols-outlined">arrow_back</span>}
            text={"Back to start"}
          />
        </div>
        {cartItems.length === 0 ? (
          <div className=" flex flex-col justify-center items-center gap-6 p-20 text-center bg-greyscale-surface-subtle rounded-xl border border-greyscale-border-default">
            <h2>Your cart is empty!</h2>
            <Button to={"/shop"} text={"Continue Shopping"}></Button>
          </div>
        ) : (
          <div className="flex flex-col justify-start items-center mt-8 gap-8">
            <h2 className="text-center">Your items</h2>
            <div className="flex flex-col gap-8">
              <div className="flex flex-wrap justify-center gap-4">
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
                            <span className="material-symbols-outlined">
                              delete
                            </span>
                          }
                          className="m-2"
                        />
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="bg-greyscale-surface-default w-10 h-10 flex items-center justify-center border border-greyscale-border-default rounded-lg hover:bg-error-surface-lighter"
                          >
                            <span className="material-symbols-outlined">
                              remove
                            </span>
                          </button>
                          <span className="bg-greyscale-surface-subtle w-12 h-12 font-medium text-lg flex items-center justify-center border border-greyscale-border-default rounded-lg">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="bg-greyscale-surface-default w-10 h-10 flex items-center justify-center border border-greyscale-border-default rounded-lg hover:bg-success-surface-lighter"
                          >
                            <span className="material-symbols-outlined">
                              add
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-end text-right gap-6">
                <div className="flex flex-col gap-1">
                  <h4>Order total</h4>
                  <p className="font-semibold">{getTotalPrice()}$</p>
                </div>
                <div className="flex items-center justify-start gap-6">
                  <DeleteButton
                    onClick={removeAllFromCart}
                    text={"Delete cart"}
                    icon={
                      <span className="material-symbols-outlined">delete</span>
                    }
                    className="m-2"
                  />
                  <SuccessButton
                    onClick={handleCheckout}
                    to="/summary"
                    text={"Buy now"}
                    icon={
                      <span className="material-symbols-outlined">
                        shopping_bag
                      </span>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
