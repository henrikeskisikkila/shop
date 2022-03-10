import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Grid from "@mui/material/Grid";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Bar from "./components/Bar";
import Progress from "./components/Progress";
import useLocalStorage from "./services/useLocalStorage";
import { client } from "./services/client";

function ProductDetails() {
  const { barcode } = useParams();

  const { isLoading, data } = useQuery({
    queryKey: "product",
    queryFn: () => client(`products/${barcode}`),
  });

  const [cart, setCart] = useLocalStorage("cart", []);

  const addToCard = (event) => {
    if (event.target.value) {
      cart.push(event.target.value);
      setCart([...cart]);
    }
  };

  return (
    <>
      <Bar productsInCart={cart.length} />
      <Grid container direction="column" alignItems="center" justify="center">
        {isLoading ? (
          <Progress />
        ) : (
          <>
            <Breadcrumbs
              aria-label="breadcrumb"
              sx={{ width: 600, marginTop: 3 }}
            >
              <Link underline="hover" color="inherit" href="/">
                Home
              </Link>
              <Typography color="text.primary">Product Detail</Typography>
            </Breadcrumbs>
            <Card variant="outlined" sx={{ width: 600, marginTop: 3 }}>
              <CardContent>
                <Typography variant="h5">{data.name}</Typography>
                <CardMedia
                  component="img"
                  sx={{ maxWidth: 300, margin: 4 }}
                  image={`${process.env.REACT_APP_API_URL_STATIC}${data.image}`}
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
          </>
        )}
      </Grid>
    </>
  );
}

export default ProductDetails;
