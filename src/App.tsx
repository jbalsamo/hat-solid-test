import {
  Component,
  createEffect,
  createResource,
  createSignal,
  onMount,
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
      "https://chronicdata.cdc.gov/resource/i46a-9kgh.json?$order=statedesc ASC&$limit=50000"
    );
    const data = await response.json();
    setCount(data.length);
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
      "https://chronicdata.cdc.gov/resource/i46a-9kgh.json?$order=statedesc ASC&$limit=50000"
    );
    const data = await response.json();
    setCount(data.length);
    console.log("Data", data);
    // Handle the retrieved datas
    const res = await data.slice(offset(), offset() + limit());
    console.log(res);
    return res;
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
  createEffect(() => {
    console.log(offset());
  });
  return (
    <div class={styles.App}>
      <Header />
      <Search>
        {offset()} {limit()} {count()}
      </Search>
      <List
        data={mydata()}
        offset={offset()}
        limit={limit()}
        title="My Content"
      />
      <Pagination
        offset={offset()}
        setOffset={setOffset}
        limit={limit()}
        count={count()}
      />
    </div>
  );
};

export default App;
