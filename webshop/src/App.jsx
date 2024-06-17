import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LandingPage from "./pages/LandingPage";
import AboutUsPage from "./pages/AboutUsPage";
import Footer from "./components/Footer";
import CheckoutProvider from "./context/CheckoutProvider";
//Här hämtar vi alla sidor som använder kontext för att få cleanare kod.
import {
  NavBarWrapper,
  ProductPageWrapper,
  SingleProductPageWrapper,
  CartPageWrapper,
  OrderSummaryPageWrapper,
} from "./components/ContextWrapper";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CheckoutProvider>
        <BrowserRouter>
          <NavBarWrapper />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/shop/*" element={<ProductPageWrapper />} />
            <Route
              path="/product/:productId"
              element={<SingleProductPageWrapper />}
            />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/cart" element={<CartPageWrapper />} />
            <Route path="/summary" element={<OrderSummaryPageWrapper />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CheckoutProvider>
    </QueryClientProvider>
  );
};

export default App;
