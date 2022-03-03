import ProductManagementBar from "./ProductManagementBar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import { TextField } from "@mui/material";

const product = {
  name: "Apple iPhone 13 256 Gt",
  description:
    "Apple iPhone 13. Kaikkein edistynein iPhonen kaksoiskamera­järjestelmä. Salaman­nopea A15 Bionic ‑siru. Iso harppaus akunkestossa.",
  price: "948.90",
  barcode: "5901234123457",
  image: "5901234123457.jpeg",
};

function ProductEdit() {
  return (
    <>
      <ProductManagementBar />
      <Grid container direction="column" alignItems="center" justify="center">
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ marginTop: 6, width: 400 }}
        >
          <Stack spacing={6}>
            <Typography>Product Details</Typography>
            <TextField
              id="outlined-number"
              label="Barcode"
              type="Number"
              InputLabelProps={{
                shrink: true,
              }}
              defaultValue={product.barcode}
            />
            <TextField
              fullWidth
              id="name"
              label="Name"
              InputLabelProps={{
                shrink: true,
              }}
              defaultValue={product.name ?? ""}
            />
            <TextField
              id="outlined-number"
              label="Price"
              type="Number"
              InputLabelProps={{
                shrink: true,
              }}
              defaultValue={parseFloat(product.price) ?? null}
            />
            <TextField
              id="description"
              label="description"
              multiline
              InputLabelProps={{
                shrink: true,
              }}
              defaultValue={product.description ?? ""}
            />
            <Button>Save</Button>
          </Stack>
        </Box>
      </Grid>
    </>
  );
}

export default ProductEdit;
//<Card sx={{ width: 600, marginTop: 6 }}></Card>
