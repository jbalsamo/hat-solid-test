import type { Component } from "solid-js";
import { createResource, createSignal } from "solid-js";

import Header from "./components/Header";
import List from "./components/List";
import Search from "./components/Search";
import styles from "./css/App.module.css";
import logo from "./logo.svg";

const author = "Richard Lucente";
const fetchData = async () => {
  try {
    const response = await fetch(
      "https://www.healthit.gov/data/open-api?source=hospital-mu-public-health-measures.csv"
    );
    const data = await response.json();
    // Handle the retrieved datas
    console.log(data);
    return await data;
  } catch (error) {
    // Handle any errors that occurred during the data retrieval
    throw error;
  }
};
const [lrange, setLrange] = createSignal(0);
const [hrange, setHrange] = createSignal(1);
const [mydata, { refetch }] = createResource(fetchData);

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Header />
      <Search></Search>
      <List
        data={mydata()}
        low={lrange()}
        high={hrange()}
        title="My Content"
        author={author}
      >
        A Short description of the list.
      </List>
    </div>
  );
};

export default App;
