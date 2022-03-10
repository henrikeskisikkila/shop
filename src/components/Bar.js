import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { Context } from "../services/ContextProvider";

function Bar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?query=${query}`, { replace: true });
  };

  const { cartItems } = useContext(Context);

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

        <form onSubmit={handleSubmit}>
          <TextField
            id="search-field"
            variant="standard"
            autoFocus
            sx={{
              bgcolor: "background.paper",
              borderRadius: 1,
              paddingLeft: 1,
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button type="submit">
                    <SearchIcon />
                  </Button>
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </form>

        <IconButton
          size="large"
          aria-label="show new notifications"
          color="inherit"
          sx={{ marginLeft: 2 }}
          href="/cart"
        >
          <Badge badgeContent={cartItems.length} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Bar;
