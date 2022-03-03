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

function ProductManagement() {
  const openAddProduct = () => {};

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mobile Shop Manager
          </Typography>
          <Button color="inherit">Add Product</Button>
        </Toolbar>
      </AppBar>
      <ProductList />
    </>
  );
}

export default ProductManagement;
