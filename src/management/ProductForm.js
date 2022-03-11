import { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

function ProductForm({ data, handleSaveButton }) {
  const [barcode, setBarcode] = useState(data?.barcode);
  const [name, setName] = useState(data?.name);
  const [price, setPrice] = useState(data?.price);
  const [description, setDescription] = useState(data?.description);

  const formData = () => {
    if (typeof handleSaveButton === "function") {
      handleSaveButton({
        barcode: barcode,
        name: name,
        price: price,
        description: description,
      });
    }
  };

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ marginTop: 6, width: 400 }}
      >
        <Stack spacing={6}>
          <Typography> {data ? `Edit Product` : `Add Product`}</Typography>
          <TextField
            id="outlined-number"
            label="Barcode"
            type="Number"
            InputLabelProps={{
              shrink: true,
            }}
            value={barcode}
            onChange={(event) => {
              setBarcode(event.target.value);
            }}
          />
          <TextField
            fullWidth
            id="name"
            label="Name"
            InputLabelProps={{
              shrink: true,
            }}
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <TextField
            id="outlined-number"
            label="Price"
            type="Number"
            InputLabelProps={{
              shrink: true,
            }}
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
          <TextField
            id="description"
            label="description"
            multiline
            InputLabelProps={{
              shrink: true,
            }}
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
          <Button onClick={formData}>Save</Button>
        </Stack>
      </Box>
    </Grid>
  );
}

export default ProductForm;
