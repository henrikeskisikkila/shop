import React, { useState, useEffect } from "react";
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
import Data from "./Data";
import useLocalStorage from "./localStorage";

function Products() {
  const [sort, setSort] = useState();
  const [products, setProducts] = useState(Data);
  const [cart, setCart] = useLocalStorage("cart", []);

  const sortProducts = (event) => {
    switch (event.target.value) {
      case "cheapest":
        products.sort((a, b) => a.price - b.price);
        break;
      case "expensive":
        products.sort((a, b) => b.price - a.price);
        break;
    }
    console.log(products);
    setProducts([...products]);
  };

  const addToCard = (event) => {
    if (event.target.value) {
      cart.push(event.target.value);
      setCart([...cart]);
    }
  };

  return (
    <div>
      <Bar productsInCart={cart.length} />

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
              <MenuItem value={"cheapest"}>Price - Cheapest</MenuItem>
              <MenuItem value={"expensive"}>Price - Expensive</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Grid container direction="column" alignItems="center" justify="center">
          <Stack>
            {products.map((product, index) => (
              <Box key={product.barcode}>
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
                  <Link
                    to={`/product/${product.barcode}`}
                    style={{ textDecoration: "none" }}
                  >
                    <CardMedia
                      component="img"
                      sx={{ width: 150 }}
                      image={`${product.image}`}
                      alt={product.name}
                    />
                  </Link>

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
                      value={product.barcode}
                      onClick={addToCard}
                    >
                      Add
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            ))}
          </Stack>
        </Grid>
      </Box>
    </div>
  );
}

export default Products;
