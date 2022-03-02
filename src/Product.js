import { Box } from "@mui/material";

function Product() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",

        bgcolor: "background.paper",
        borderRadius: "2px",
        boxShadow: 1,
      }}
    >
      <Box sx={{ width: 600 }}> content </Box>
    </Box>
  );
}

export default Product;
