import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import Typography from "@mui/material/Typography";
import Bar from "./components/Bar";
import Crumbs from "./components/Crumbs";
import List from "./components/List";
import { client } from "./services/client";

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const { isSuccess, data } = useQuery(["search", query], () =>
    client(`products/search?query=${query}`)
  );

  return (
    <>
      <Bar />
      <Crumbs current={"Search Results"} />

      {isSuccess && data?.length > 0 ? <List items={data} /> : null}
      {isSuccess && data?.length === 0 ? (
        <Typography sx={{ textAlign: "center", m: 6 }}>No results</Typography>
      ) : null}
    </>
  );
}

export default Search;
