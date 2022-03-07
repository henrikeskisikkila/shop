import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ProductList from "./ProductList";
import ProductManagementBar from "./ProductManagementBar";

function ProductManagement() {
  const openAddProduct = () => {};

  return (
    <>
      <ProductManagementBar />
      <ProductList />
    </>
  );
}

export default ProductManagement;
