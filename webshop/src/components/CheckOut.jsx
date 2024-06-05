import React from "react";
const CheckOut = ({ cartItems }) => {
  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover"
              />
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p>
                  {item.quantity} x {item.price}$
                </p>
              </div>
            </div>
          ))}
          <div className="text-right font-bold">
            <p>Total: {getTotalPrice()}$</p>
          </div>
          <button className="bg-blue-500 text-white rounded p-2 mt-4">
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
};
export default CheckOut;
