import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Products";
import Cart from "./Cart";
import ProductDetails from "./ProductDetails";
import ProductManagement from "./management/ProductManagement";
import ProductAdd from "./management/ProductAdd";
import ProductEdit from "./management/ProductEdit";
import Search from "./Search";

function App(props) {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:barcode" element={<ProductDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="/management" element={<ProductManagement />} />
        <Route path="/management/add/" element={<ProductAdd />} />
        <Route path="/management/edit/:barcode" element={<ProductEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
