import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

function Progress() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justityContent: "center",
        marginTop: 20,
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export default Progress;
