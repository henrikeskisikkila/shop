import React, { useState } from "react";
import { useQuery } from "react-query";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Bar from "./components/Bar";
import Progress from "./components/Progress";
import Product from "./components/Product";
import { client } from "./services/client";

function Products() {
  const [endpoint, setEndpoint] = useState("products");
  const [sort, setSort] = useState("");

  const { isLoading, isSuccess, data } = useQuery(["product", endpoint], () =>
    client(endpoint)
  );

  const sortProducts = (event) => {
    setSort(event.target.value);
    const endpointPrefix = "products/order?property=";
    switch (event.target.value) {
      case "cheapest":
        setEndpoint(`${endpointPrefix}price`);
        break;
      case "expensive":
        setEndpoint(`${endpointPrefix}price&order=desc`);
        break;
      case "name-ascending":
        setEndpoint(`${endpointPrefix}name`);
        break;
      case "name-descending":
        setEndpoint(`${endpointPrefix}name&order=desc`);
        break;
      default:
        setEndpoint("products");
        return;
    }
  };

  return (
    <>
      <Bar />
      {isLoading ? <Progress /> : null}
      {isSuccess ? (
        <>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Box sx={{ width: 600 }}>
              <FormControl sx={{ marginTop: 4, width: 250 }}>
                <InputLabel id="select-sort-label">Sort</InputLabel>
                <Select
                  labelId="select-sort-label"
                  id="select-sort-label"
                  label="Sort"
                  value={sort}
                  onChange={sortProducts}
                >
                  <MenuItem value={"cheapest"}>Cheapest First</MenuItem>
                  <MenuItem value={"expensive"}>Expensive First</MenuItem>
                  <MenuItem value={"name-ascending"}>
                    Product Name Ascending
                  </MenuItem>
                  <MenuItem value={"name-descending"}>
                    Product Name Descending
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
            {data.map((product) => (
              <Product key={product.barcode} product={product} />
            ))}
          </Grid>
        </>
      ) : null}
    </>
  );
}

export default Products;
