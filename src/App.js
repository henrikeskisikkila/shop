import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Products";
import Product from "./Product";

//import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
