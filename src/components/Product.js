import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import useLocalStorage from "../services/useLocalStorage";

function Product({ product }) {
  const [cart, setCart] = useLocalStorage("cart", []);

  const addToCard = (event) => {
    const value = event.target.value;
    if (value) {
      cart.push(value);
      setCart([...cart]);
    }
  };

  return (
    <>
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
    </>
  );
}

export default Product;
