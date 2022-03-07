import {
  Grid,
  Stack,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Bar from "./components/Bar";
import Data from "./Data";
import useLocalStorage from "./services/useLocalStorage";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

function Cart() {
  const [cart, setCart] = useLocalStorage("cart", []);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const products = cart.map((cartItem) => {
      const result = Data.filter((product) => {
        return product.barcode === cartItem;
      });
      return result;
    });
    const productData = products.flatMap((item) => item);
    setProducts(productData);
  }, [cart]);

  const removeFromCart = (event) => {
    const index = cart.findIndex((barcode) => barcode === event.target.value);
    cart.splice(index, 1);
    setCart([...cart]);
  };

  return (
    <>
      <Bar productsInCart={cart.length} />
      <Grid container direction="column" alignItems="center" justify="center">
        <Typography variant="h5" sx={{ margin: 4 }}>
          Shopping Cart
        </Typography>
        <Stack spacing={2}>
          {products.map((product) => (
            <Card
              key={product.barcode}
              sx={{ height: 100, width: 600, padding: 2 }}
              variant="outlined"
            >
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <CardMedia
                  component="img"
                  sx={{ maxHeight: 100, height: "auto", width: "auto" }}
                  image={`${product.image}`}
                  alt={product.name}
                />
                <CardContent>
                  <Typography>{product.name}</Typography>
                  <Typography style={{ color: "red", fontWeight: "bold" }}>
                    {product.price}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    flex: "1 0 auto",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    variant="contained"
                    startIcon={<RemoveShoppingCartIcon />}
                    value={product.barcode}
                    onClick={removeFromCart}
                  >
                    Remove
                  </Button>
                </CardActions>
              </Box>
            </Card>
          ))}
        </Stack>
      </Grid>
    </>
  );
}

export default Cart;
