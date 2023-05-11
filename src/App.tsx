import type { Component } from "solid-js";
import { createResource } from "solid-js";

import Header from "./components/Header";
import List from "./components/List";
import Search from "./components/Search";
import styles from "./css/App.module.css";
import logo from "./logo.svg";

const author = "Richard Lucente";
const fetchBikes = async () => {
  const response = await fetch(
    "https://chroniclingamerica.loc.gov/search/titles/results/?terms=oakland&format=json&page=5",
    { method: "GET" }
  );
  let result = await response.json();
  console.log(result);
  return result;
};

const [bikes, { refetch }] = createResource(fetchBikes);
console.log(bikes());

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Header />
      <Search></Search>
      <List title="My Content" author={author}>
        A Short description of the list.
      </List>
    </div>
  );
};

export default App;
