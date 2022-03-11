import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Grid from "@mui/material/Grid";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Bar from "./components/Bar";
import Progress from "./components/Progress";
import { client } from "./services/client";
import Crumbs from "./components/Crumbs";
import { Context } from "./services/ContextProvider";

function ProductDetails() {
  const { barcode } = useParams();

  const { addToCart } = useContext(Context);

  const { isLoading, data } = useQuery({
    queryKey: "product",
    queryFn: () => client(`products/${barcode}`),
  });

  return (
    <>
      <Bar />
      <Grid container direction="column" alignItems="center" justify="center">
        {isLoading ? (
          <Progress />
        ) : (
          <>
            <Crumbs current={"Product Detail"} />
            <Card variant="outlined" sx={{ width: 600, marginTop: 3 }}>
              <CardContent>
                <Typography variant="h5">{data.name}</Typography>
                {data.image ? (
                  <CardMedia
                    component="img"
                    sx={{ maxWidth: 300, margin: 4 }}
                    image={`${process.env.REACT_APP_API_URL_STATIC}${data.image}`}
                    alt={data.name}
                  />
                ) : (
                  <Box
                    sx={{
                      width: 300,
                      height: 400,
                      margin: 4,
                      background: "lightGray",
                    }}
                  />
                )}
                <Typography variant="body2">{data.description}</Typography>
                <Typography
                  variant="h6"
                  style={{ color: "red", fontWeight: "bold" }}
                >
                  {data.price}
                </Typography>
                <Box sx={{ mt: 2, mb: 2 }}>
                  <Typography variant="caption">
                    barcode: {data.barcode}
                  </Typography>
                </Box>
                <CardActions>
                  <Button
                    variant="contained"
                    startIcon={<AddShoppingCartIcon />}
                    value={data}
                    onClick={() => addToCart(data)}
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
