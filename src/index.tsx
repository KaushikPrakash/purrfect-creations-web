import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Dashboard from "./Dashboard";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Dashboard />
    </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();
