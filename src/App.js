import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/ProductsPage';
import CustomersPage from './Pages/CustomersPage';
import ProductDetailPage from './Pages/ProductDetailPage';
import CustomerDetailPage from './Pages/CustomerDetailPage';
import CreateProductPage from './Pages/CreateProductPage';
import CreateCustomerPage from './Pages/CreateCustomerPage';
import OrdersPage from './Pages/OrdersPage';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/customers/:id" element={<CustomerDetailPage />} />
        <Route path="/create-product" element={<CreateProductPage />} />
        <Route path="/create-customer" element={<CreateCustomerPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;