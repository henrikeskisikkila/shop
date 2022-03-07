import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Input from "@mui/material/Input";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

function Bar(props) {
  console.log(props.productsInCart);
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to={"/"}
          sx={{ flexGrow: 1, color: "inherit", textDecoration: "inherit" }}
        >
          Mobile Shop
        </Typography>

        <TextField
          id="search-field"
          variant="standard"
          autoFocus
          sx={{
            bgcolor: "background.paper",
            borderRadius: 1,
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button>
                  <SearchIcon />
                </Button>
              </InputAdornment>
            ),
          }}
        />

        <IconButton
          size="large"
          aria-label="show new notifications"
          color="inherit"
          sx={{ marginLeft: 2 }}
          href="/cart"
        >
          <Badge badgeContent={props.productsInCart} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Bar;
