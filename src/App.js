import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/UI/Navigation";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import AddProduct from "./pages/AddProduct";
import Provider from "./context/Provider";

function App() {
  return (
    <Provider>
      <header>
        <Navigation />
      </header>
      <div className="app-layout">
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="*" element={<Navigate replace to="/products" />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
