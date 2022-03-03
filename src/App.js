import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Products";
import Product from "./Product";

//import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Products />} />
        <Route path="/product/:barcode" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
