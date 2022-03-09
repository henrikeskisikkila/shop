import { useMutation } from "react-query";
import ProductManagementBar from "./ProductManagementBar";
import ProductForm from "./ProductForm";
import { client } from "../services/client";

function ProductAdd() {
  const mutation = useMutation((newProduct) => {
    return client(`products/`, { data: newProduct });
  });

  const addProduct = (product) => {
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
