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
  Grid,
} from "@mui/material";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import Bar from "./Bar";

const phones = [
  {
    name: "Apple iPhone 13 256 Gt",
    description:
      "Apple iPhone 13. Kaikkein edistynein iPhonen kaksoiskamera­järjestelmä. Salaman­nopea A15 Bionic ‑siru. Iso harppaus akunkestossa.",
    price: 948.9,
    barcode: "5901234123457",
    image: "5901234123457.jpeg",
  },
  {
    name: "Apple iPhone 13 128 Gt",
    description:
      "Kestävä rakenne. Supernopea 5G. Salaman­nopea A15 Bionic ‑siru. Ja kirkkaampi Super Retina XDR ‑näyttö",
    price: 849.0,
    barcode: "1234234534561",
    image: "1234234534561.jpeg",
  },
  {
    name: "Apple iPhone 13 Pro Max 1 Tt",
    description:
      "Apple iPhone 13 Pro Max. Kaikkien aikojen isoin ammatti­tason kamera­järjestelmän päivitys.",
    price: 1858.9,
    barcode: "4321543265431",
    image: "4321543265431.jpeg",
  },
  {
    name: "Samsung Galaxy S20 FE 4G (2021)",
    description:
      "Galaxy S20 FE sisältää S20-sarjan tärkeimmät ja halutuimmat toiminnot, jotta yhä useampi voisi nauttia todellisen premium-puhelimen tunnusta.",
    price: 499.0,
    barcode: "5432432165432",
    image: "5432432165432.jpeg",
  },
];

function Products() {
  const [sort, setSort] = useState();
  const [products, setProducts] = useState(phones);

  const sortProducts = (event) => {
    switch (event.target.value) {
      case "cheapest":
        products.sort((a, b) => a.price - b.price);
        break;
      case "expensive":
        products.sort((a, b) => b.price - a.price);
        break;
    }
    setProducts([...products]);
  };

  return (
    <div>
      <Bar />

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
            <InputLabel id="select-sort-label">Sort</InputLabel>
            <Select
              labelId="select-sort-label"
              id="select-sort-label"
              value={sort}
              label="Age"
              onChange={sortProducts}
            >
              <MenuItem value={"cheapest"}>Cheapest First</MenuItem>
              <MenuItem value={"expensive"}>Most Expensive First</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Grid container direction="column" alignItems="center" justify="center">
          <Stack>
            {products.map((product, index) => (
              <Box key={product.barcode}>
                <Link
                  to={`/product/${product.barcode}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    mt={2}
                    variant="outlined"
                    sx={{
                      display: "flex",
                      spaceBetween: 1,
                      flexDirection: "row",
                      width: 600,
                      height: 200,
                      marginTop: 4,
                      padding: 2,
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{ width: 150 }}
                      image={`${product.image}`}
                      alt={product.name}
                    />
                    <CardContent>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                      >
                        {product.name}
                      </Typography>
                      <Typography variant="body2">
                        {product.description}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        style={{ color: "red", fontWeight: "bold" }}
                      >
                        {product.price}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        startIcon={<AddShoppingCartIcon />}
                      >
                        Add
                      </Button>
                    </CardActions>
                  </Card>
                </Link>
              </Box>
            ))}
          </Stack>
        </Grid>
      </Box>
    </div>
  );
}

export default Products;
