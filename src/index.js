import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { ContextProvider } from "./services/ContextProvider";
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextProvider children={<App />} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
