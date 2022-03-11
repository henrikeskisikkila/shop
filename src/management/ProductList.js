import { useQuery, useMutation, useQueryClient } from "react-query";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Button from "@mui/material/Button";
import { client } from "../services/client";
import Progress from "../components/Progress";

function ProductList() {
  const { isLoading, isSuccess, data } = useQuery({
    queryKey: "product",
    queryFn: () => client(`products`),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (barcode) => client(`products/${barcode}/`, { httpMethod: "DELETE" }),
    { onSettled: () => queryClient.invalidateQueries("product") }
  );

  if (isLoading) {
    return <Progress />;
  }

  return isSuccess ? (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Barcode</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((product) => (
            <TableRow key={product.barcode}>
              <TableCell>{product.barcode}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>
                <Button
                  color="error"
                  value={product.barcode}
                  onClick={() => {
                    mutation.mutate(product.barcode);
                  }}
                >
                  Remove
                </Button>
              </TableCell>
              <TableCell>
                <Button href={`/management/edit/${product.barcode}`}>
                  Edit{" "}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : null;
}

export default ProductList;
