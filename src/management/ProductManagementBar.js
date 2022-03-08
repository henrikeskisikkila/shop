import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function ProductManagementBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to={"/management"}
          sx={{ flexGrow: 1, color: "inherit", textDecoration: "inherit" }}
        >
          Mobile Shop Manager
        </Typography>
        <Button color="inherit" href={"/management/edit"}>
          Add Product
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default ProductManagementBar;
