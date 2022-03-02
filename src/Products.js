import React, { useState } from "react";
import {
  Container,
  Stack,
  Box,
  TextField,
  Button,
  AccountCircle,
  InputAdornment,
  Icon,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Input,
  Badge,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const products = [
  {
    name: "Apple iPhone 13 256 Gt",
    description:
      "Apple iPhone 13. Kaikkein edistynein iPhonen kaksoiskamera­järjestelmä. Salaman­nopea A15 Bionic ‑siru. Iso harppaus akunkestossa.",
    price: "948,90",
    barcode: "5901234123457",
    image: "5901234123457.jpeg",
  },
  {
    name: "Apple iPhone 13 128 Gt",
    description:
      "Kestävä rakenne. Supernopea 5G. Salaman­nopea A15 Bionic ‑siru. Ja kirkkaampi Super Retina XDR ‑näyttö",
    price: "849,00",
    barcode: "1234234534561",
    image: "1234234534561.jpeg",
  },
  {
    name: "Apple iPhone 13 Pro Max 1 Tt",
    description:
      "Apple iPhone 13 Pro Max. Kaikkien aikojen isoin ammatti­tason kamera­järjestelmän päivitys.",
    price: "1 858,90",
    barcode: "4321543265431",
    image: "4321543265431.jpeg",
  },
  {
    name: "Samsung Galaxy A32 5G",
    description:
      "Ota askel tulevaisuuteen 5G-nopeuksilla – Galaxy A32 5G avaa uudet mahdollisuudet suoratoistoon.",
    price: "239,00",
    barcode: "4321432143211",
    image: "4321432143211.jpeg",
  },
  {
    name: "Samsung Galaxy S20 FE 4G (2021)",
    description:
      "Galaxy S20 FE sisältää S20-sarjan tärkeimmät ja halutuimmat toiminnot, jotta yhä useampi voisi nauttia todellisen premium-puhelimen tunnusta.",
    price: "499,00",
    barcode: "5432432165432",
    image: "5432432165432.jpeg",
  },
];

function Products() {
  const [sort, setSort] = useState();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shop
          </Typography>

          {/* This should be own component SearchBar*/}
          <TextField
            id="filled-basic"
            label=""
            variant="standard"
            autoFocus={true}
            sx={{
              bgcolor: "background.paper",
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
          >
            <Badge badgeContent={3} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: 600 }}>
          <FormControl sx={{ marginTop: 6, width: 200 }}>
            <InputLabel id="demo-simple-select-label">Sort</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sort}
              label="Age"
              onChange={{}}
            >
              <MenuItem value={"name"}>Name</MenuItem>
              <MenuItem value={"price"}>Price</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Stack>
          {products.map((product, index) => (
            <Card
              key={index}
              mt={2}
              sx={{
                display: "flex",
                spaceBetween: 1,
                flexDirection: "row",
                bgcolor: "background.paper",
                borderRadius: "2px",
                boxShadow: 1,
                width: 600,
                height: 200,
                marginTop: 4,
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: 150 }}
                image={`${product.image}`}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  {product.name}
                </Typography>
                <Typography variant="body2">{product.description}</Typography>
                <Typography
                  variant="subtitle1"
                  style={{ color: "red", fontWeight: "bold" }}
                >
                  {product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" startIcon={<AddShoppingCartIcon />}>
                  Add
                </Button>
              </CardActions>
            </Card>
          ))}
        </Stack>
      </Box>
    </div>
  );
}

export default Products;
