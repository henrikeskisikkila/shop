import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import ProductManagementBar from "./ProductManagementBar";
import Progress from "../components/Progress";
import { client } from "../services/client";

function ProductEdit() {
  const { barcode } = useParams();
  const { isLoading, isSuccess, data } = useQuery({
    queryKey: "product",
    queryFn: () => client(`products/${barcode}`),
  });

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
          {isLoading ? <Progress /> : null}
          {isSuccess ? (
            <Stack spacing={6}>
              <Typography>Product Details</Typography>
              <TextField
                id="outlined-number"
                label="Barcode"
                type="Number"
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue={data.barcode}
              />
              <TextField
                fullWidth
                id="name"
                label="Name"
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue={data.name ?? ""}
              />
              <TextField
                id="outlined-number"
                label="Price"
                type="Number"
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue={parseFloat(data.price) ?? null}
              />
              <TextField
                id="description"
                label="description"
                multiline
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue={data.description ?? ""}
              />
              <Button>Save</Button>
            </Stack>
          ) : null}
        </Box>
      </Grid>
    </>
  );
}

export default ProductEdit;
//<Card sx={{ width: 600, marginTop: 6 }}></Card>
