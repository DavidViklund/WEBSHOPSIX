import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LandingPage from "./pages/LandingPage";
import AboutUsPage from "./pages/AboutUsPage";
import CheckoutProvider from "./context/CheckoutProvider";
import {
  NavBarWrapper,
  ProductPageWrapper,
  SingleProductPageWrapper,
  CartPageWrapper,
  OrderSummaryPageWrapper,
} from "./components/ContextWrapper";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CheckoutProvider>
        <BrowserRouter>
          <NavBarWrapper />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/ProductPage" element={<ProductPageWrapper />} />
            <Route
              path="/SingleProductPage/:productId"
              element={<SingleProductPageWrapper />}
            />
            <Route path="/AboutUsPage" element={<AboutUsPage />} />
            <Route path="/CartPage" element={<CartPageWrapper />} />
            <Route
              path="/OrderSummaryPage"
              element={<OrderSummaryPageWrapper />}
            />
          </Routes>
        </BrowserRouter>
      </CheckoutProvider>
    </QueryClientProvider>
  );
};

export default App;
