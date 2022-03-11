import { useParams } from "react-router-dom";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import Alert from "@mui/material/Alert";
import ProductManagementBar from "./ProductManagementBar";
import Crumbs from "../components/Crumbs";
import ProductForm from "./ProductForm";
import Progress from "../components/Progress";
import { client } from "../services/client";

function ProductEdit() {
  const { barcode } = useParams();

  const { isLoading, isSuccess, data } = useQuery({
    queryKey: ["product", barcode],
    queryFn: () => client(`products/${barcode}`),
  });

  const [saved, setSaved] = useState(false);
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (product) => {
      return client(`products/${product.barcode}/`, {
        data: product,
        httpMethod: "PUT",
      });
    },
    {
      onSuccess: () => {
        setSaved(true);
        queryClient.invalidateQueries("product");
      },
    }
  );

  const editProduct = (product) => {
    mutation.mutate(product);
  };

  return (
    <>
      <ProductManagementBar />
      <Crumbs home={"/management"} current={"Edit Product"} />
      {isLoading ? <Progress /> : null}
      {isSuccess ? (
        <ProductForm data={data} handleSaveButton={editProduct} />
      ) : null}
      {mutation.isLoading ? <Progress /> : null}
      {saved ? (
        <Alert
          sx={{ m: 6 }}
          onClose={() => {
            setSaved(false);
          }}
        >
          Saved succesfully!
        </Alert>
      ) : null}
    </>
  );
}

export default ProductEdit;
