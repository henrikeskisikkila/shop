import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const product = {
  name: "Apple iPhone 13 256 Gt",
  description:
    "Apple iPhone 13. Kaikkein edistynein iPhonen kaksoiskamera­järjestelmä. Salaman­nopea A15 Bionic ‑siru. Iso harppaus akunkestossa.",
  price: "948,90",
  barcode: "5901234123457",
  image: "5901234123457.jpeg",
};

function Product() {
  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Card sx={{ width: 600 }}>
        <CardContent>
          <Typography variant="h5">{product.name}</Typography>
          <CardMedia
            component="img"
            sx={{ maxWidth: 300, margin: 4 }}
            image={`${product.image}`}
            alt={product.name}
          />
          <Typography variant="body2">{product.description}</Typography>
          <Typography variant="h6" style={{ color: "red", fontWeight: "bold" }}>
            {product.price}
          </Typography>

          <CardActions>
            <Button variant="contained" startIcon={<AddShoppingCartIcon />}>
              Add
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default Product;
