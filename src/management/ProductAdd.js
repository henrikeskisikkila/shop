import { useState } from "react";
import { useMutation } from "react-query";
import ProductManagementBar from "./ProductManagementBar";
import Crumbs from "../components/Crumbs";
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
      <Crumbs home={"/management"} current={"Add Product"} />
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
