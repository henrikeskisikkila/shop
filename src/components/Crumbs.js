import Grid from "@mui/material/Grid";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function Crumbs({ current }) {
  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Breadcrumbs aria-label="breadcrumb" sx={{ width: 600, marginTop: 3 }}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="text.primary">{current}</Typography>
      </Breadcrumbs>
    </Grid>
  );
}

export default Crumbs;
