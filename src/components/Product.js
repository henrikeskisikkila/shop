import { useContext } from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Context } from "../services/ContextProvider";

function Product({ product }) {
  const { addToCart } = useContext(Context);

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
          {product.image ? (
            <CardMedia
              component="img"
              sx={{
                width: 150,
              }}
              image={`${process.env.REACT_APP_API_URL_STATIC}${product.image}`}
              alt={product.name}
            />
          ) : (
            <Box sx={{ width: 150, height: 200, background: "lightGray" }} />
          )}
        </Link>
        <CardContent sx={{ flexGrow: 2 }}>
          <Typography variant="h6">{product.name}</Typography>
          <Typography variant="body2">{product.description}</Typography>
          <Typography
            variant="subtitle1"
            style={{ color: "red", fontWeight: "bold" }}
          >
            {parseFloat(product.price).toFixed(2)}
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Typography variant="caption">
              barcode: {product.barcode}
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            startIcon={<AddShoppingCartIcon />}
            value={product.barcode}
            onClick={() => addToCart(product)}
          >
            Add
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default Product;
