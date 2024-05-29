import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          <Route path="/AboutUsPage" element={<AboutUsPage />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/OrderSummaryPage" element={<OrderSummaryPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
export default App;
