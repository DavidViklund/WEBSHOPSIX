import React from "react";
import { useCheckout } from "../context/CheckoutProvider";
import NavBar from "./NavBar";
import ProductPage from "../pages/ProductPage";
import SingleProductPage from "../pages/SingleProductPage";
import CartPage from "../pages/CartPage";
import OrderSummaryPage from "../pages/OrderSummaryPage";

export const NavBarWrapper = () => {
  const { cartItems } = useCheckout();
  return (
    <NavBar cartQty={cartItems.reduce((sum, item) => sum + item.quantity, 0)} />
  );
};

export const ProductPageWrapper = () => {
  const { addToCart } = useCheckout();
  return <ProductPage addToCart={addToCart} />;
};

export const SingleProductPageWrapper = () => {
  const { addToCart } = useCheckout();
  return <SingleProductPage addToCart={addToCart} />;
};

export const CartPageWrapper = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCheckout();
  return (
    <CartPage
      cartItems={cartItems}
      removeFromCart={removeFromCart}
      updateQuantity={updateQuantity}
    />
  );
};

export const OrderSummaryPageWrapper = () => {
  const { cartItems } = useCheckout();
  return <OrderSummaryPage cartItems={cartItems} />;
};
