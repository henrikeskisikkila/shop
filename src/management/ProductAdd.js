import { useParams } from "react-router-dom";
import { useMutation, queryCache } from "react-query";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import ProductManagementBar from "./ProductManagementBar";
import ProductForm from "./ProductForm";
import Progress from "../components/Progress";
import { client } from "../services/client";

function ProductAdd() {
  const mutation = useMutation((newProduct) => {
    return client(`products/`, { data: newProduct });
  });

  const addProduct = (product) => {
    console.log(product);
    mutation.mutate(product);
  };

  return (
    <>
      <ProductManagementBar />
      <ProductForm handleSaveButton={addProduct} />
      {mutation.isLoading ? "Adding product" : null}
      {mutation.isError ? mutation.error.message : null}
      {mutation.isSuccess ? "Product added" : null}
    </>
  );
}

export default ProductAdd;
