import { useState } from "react";
import { useMutation } from "react-query";
import ProductManagementBar from "./ProductManagementBar";
import ProductForm from "./ProductForm";
import Progress from "../components/Progress";
import Alert from "@mui/material/Alert";
import { client } from "../services/client";

function ProductAdd() {
  const [added, setAdded] = useState(false);

  const mutation = useMutation(
    (newProduct) => {
      return client(`products/`, { data: newProduct });
    },
    {
      onSuccess: () => {
        console.log("success");
        setAdded(true);
      },
    }
  );

  const addProduct = (product) => {
    mutation.mutate(product);
  };

  return (
    <>
      <ProductManagementBar />
      <ProductForm handleSaveButton={addProduct} />
      {mutation.isLoading ? <Progress /> : null}
      {added ? (
        <Alert
          sx={{ m: 6 }}
          onClose={() => {
            setAdded(false);
          }}
        >
          Saved succesfully!
        </Alert>
      ) : null}
    </>
  );
}

export default ProductAdd;
