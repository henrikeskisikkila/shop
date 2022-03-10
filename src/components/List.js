import Grid from "@mui/material/Grid";
import Product from "./Product";

function List({ items }) {
  return (
    <>
      <Grid container direction="column" alignItems="center" justify="center">
        {items.map((item) => (
          <Product key={item.barcode} product={item} />
        ))}
      </Grid>
    </>
  );
}

export default List;
