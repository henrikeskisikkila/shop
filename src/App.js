import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Products";
import Product from "./Product";
import ProductManagement from "./management/ProductManagement";
import ProductEdit from "./management/ProductEdit";

//import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Products />} />
        <Route path="/product/:barcode" element={<Product />} />
        <Route path="/management" element={<ProductManagement />} />
        <Route path="/management/edit" element={<ProductEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
