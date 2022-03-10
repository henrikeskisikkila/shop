import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Bar from "./components/Bar";
import Progress from "./components/Progress";
import useLocalStorage from "./services/useLocalStorage";
import { client } from "./services/client";

function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useLocalStorage("cart", []);
  const navigate = useNavigate();

  const addToCard = (event) => {
    const value = event.target.value;
    if (value) {
      cart.push(value);
      setCart([...cart]);
    }
  };

  let query = "";

  const {
    isLoading,
    isSuccess,
    data,
    refetch: fetchProducts,
  } = useQuery("product", () => client(`products`), {
    refetchOnWindowFocus: false,
    enabled: false,
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const sortProducts = (event) => {
    switch (event.target.value) {
      case "cheapest":
        products.sort((a, b) => a.price - b.price);
        break;
      case "expensive":
        products.sort((a, b) => b.price - a.price);
        break;
      default:
        return;
    }
    setProducts([...products]);
  };

  const {
    isLoading: isLoadingSearchResults,
    isSuccess: isSearchSuccess,
    data: searchData,
    refetch: fetchSearchResults,
  } = useQuery(
    ["search", query],
    () => client(`products/search?query=${query}`),
    { enabled: false }
  );

  console.log(searchData);

  if (isSearchSuccess) {
    query = "";
  }

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
        {isLoading ? <Progress /> : null}

        {isSuccess ? (
          <>
            <Box sx={{ width: 600 }}>
              <FormControl sx={{ marginTop: 6, width: 200 }}>
                <InputLabel id="select-sort-label">Sort</InputLabel>
                <Select
                  labelId="select-sort-label"
                  id="select-sort-label"
                  label="Age"
                  value={""}
                  onChange={sortProducts}
                >
                  <MenuItem value={"cheapest"}>Price - Cheapest</MenuItem>
                  <MenuItem value={"expensive"}>Price - Expensive</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Grid
              container
              direction="column"
              alignItems="center"
              justify="center"
            >
              <Stack>
                {data.map((product) => (
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
                          image={`${process.env.REACT_APP_API_URL_STATIC}${product.image}`}
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
          </>
        ) : null}
      </Box>
    </div>
  );
}

export default Products;
