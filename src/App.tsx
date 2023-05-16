import {
  Component,
  createEffect,
  createResource,
  createSignal,
} from "solid-js";
import { Portal } from "solid-js/web";

import Header from "./components/Header";
import List from "./components/List";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import styles from "./css/App.module.css";
import logo from "./logo.svg";

const author = "Richard Lucente";

const fetchAllData = async () => {
  try {
    const response = await fetch(
      "https://chronicdata.cdc.gov/resource/i46a-9kgh.json"
    );
    const data = await response.json();
    console.log("AllData", data);
    // Handle the retrieved datas
    return await data;
  } catch (error) {
    // Handle any errors that occurred during the data retrieval
    throw error;
  }
};

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://chronicdata.cdc.gov/resource/i46a-9kgh.json?$offset=" +
        offset() +
        "&$limit=" +
        limit()
    );
    const data = await response.json();
    console.log("Data", data);
    // Handle the retrieved datas
    return await data;
  } catch (error) {
    // Handle any errors that occurred during the data retrieval
    throw error;
  }
};
const [lrange, setLrange] = createSignal(0);
const [hrange, setHrange] = createSignal(1);
const [count, setCount] = createSignal(0);
const [limit, setLimit] = createSignal(10);
const [offset, setOffset] = createSignal(0);
const [alldata] = createResource(fetchAllData);
const [mydata, { refetch }] = createResource(fetchData);

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Header />
      <Search></Search>
      <List
        data={mydata()}
        offset={offset()}
        limit={limit()}
        title="My Content"
        author={author}
      >
        <Pagination
          offset={offset()}
          setOffset={setOffset}
          limit={limit()}
          count={alldata().length}
        />
      </List>

      <Pagination
        offset={offset()}
        setOffset={setOffset}
        limit={limit()}
        count={alldata().length}
      />
    </div>
  );
};

export default App;
