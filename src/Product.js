import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Bar from "./components/Bar";
import Progress from "./components/Progress";
import useLocalStorage from "./services/useLocalStorage";

const fetchProduct = async ({ queryKey }) => {
  const [_, barcode] = queryKey;
  console.log(barcode);
  const response = await fetch(`http://127.0.0.1:8000/products/${barcode}`);
  const data = await response.json();
  return data;
};

function Product() {
  const { barcode } = useParams();

  const { isLoading, isError, data, error } = useQuery(
    ["product", barcode],
    fetchProduct
  );

  const [cart, setCart] = useLocalStorage("cart", []);

  const addToCard = (event) => {
    if (event.target.value) {
      cart.push(event.target.value);
      setCart([...cart]);
    }
  };

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <Bar productsInCart={cart.length} />
      <Grid container direction="column" alignItems="center" justify="center">
        {isLoading ? (
          <Progress />
        ) : (
          <Card variant="outlined" sx={{ width: 600, marginTop: 6 }}>
            <CardContent>
              <Typography variant="h5">{data.name}</Typography>
              <CardMedia
                component="img"
                sx={{ maxWidth: 300, margin: 4 }}
                image={`../${data.image}`}
                alt={data.name}
              />
              <Typography variant="body2">{data.description}</Typography>
              <Typography
                variant="h6"
                style={{ color: "red", fontWeight: "bold" }}
              >
                {data.price}
              </Typography>

              <CardActions>
                <Button
                  variant="contained"
                  startIcon={<AddShoppingCartIcon />}
                  value={barcode}
                  onClick={addToCard}
                >
                  Add
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        )}
      </Grid>
    </>
  );
}

export default Product;
