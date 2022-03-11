import React, { useState, useEffect, useContext } from "react";
import { useQueries, useQuery } from "react-query";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import Bar from "./components/Bar";
import Crumbs from "./components/Crumbs";
import { client } from "./services/client";
import { Context } from "./services/ContextProvider";

function Cart() {
  const { cartItems: products, removeFromCart } = useContext(Context);

  const remove = (event) => {
    removeFromCart(event.target.value);
  };

  return (
    <>
      <Bar />
      <Grid container direction="column" alignItems="center" justify="center">
        <Crumbs current={"Shopping Cart"} />
        <Typography variant="h5" sx={{ margin: 4 }}>
          Shopping Cart
        </Typography>
        <Stack spacing={2}>
          {products.map((product, index) => (
            <Card
              key={index}
              sx={{ height: 100, width: 600, padding: 2 }}
              variant="outlined"
            >
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                {product.image ? (
                  <CardMedia
                    component="img"
                    sx={{ maxHeight: 100, height: "auto", width: "auto" }}
                    image={`${product.image}`}
                    alt={product.name}
                  />
                ) : (
                  <Box
                    sx={{ width: 80, height: 100, background: "lightGray" }}
                  />
                )}
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
                    onClick={remove}
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
