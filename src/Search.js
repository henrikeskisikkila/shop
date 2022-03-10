import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import Bar from "./components/Bar";
import Crumbs from "./components/Crumbs";
import List from "./components/List";
import useLocalStorage from "./services/useLocalStorage";
import { client } from "./services/client";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cart, setCart] = useLocalStorage("cart", []);
  const query = searchParams.get("query");

  const { isLoading, isSuccess, data } = useQuery(["search", query], () =>
    client(`products/search?query=${query}`)
  );

  return (
    <div>
      <Bar productsInCart={cart.length} />
      <Crumbs current={"Search Results"} />
      {isSuccess ? (
        <>
          <List items={data} />
        </>
      ) : null}
    </div>
  );
}

export default Search;
