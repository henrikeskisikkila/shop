import { useParams } from "react-router-dom";
import { useState } from "react";
import { useQuery, useMutation } from "react-query";
import Alert from "@mui/material/Alert";
import ProductManagementBar from "./ProductManagementBar";
import ProductForm from "./ProductForm";
import Progress from "../components/Progress";
import { client } from "../services/client";

function ProductEdit() {
  const { barcode } = useParams();

  const { isLoading, isSuccess, data } = useQuery({
    queryKey: "product",
    queryFn: () => client(`products/${barcode}`),
  });

  const [saved, setSaved] = useState(false);

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
      },
    }
  );

  const editProduct = (product) => {
    console.log(product);
    mutation.mutate(product);
  };

  return (
    <>
      <ProductManagementBar />
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
//<Card sx={{ width: 600, marginTop: 6 }}></Card>
