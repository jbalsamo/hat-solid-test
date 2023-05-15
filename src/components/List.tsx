import { For, Show } from "solid-js";
import ListItem from "../components/ListItem";
import styles from "../css/List.module.css";

const List = (props) => {
  console.log(props);
  return (
    <div class={`${styles.list} grid-item`}>
      <h1>
        {props.title} by {props.author}
      </h1>
      <h3>{props.children}</h3>
      <For each={props.data}>{(record) => <ListItem item={record} />}</For>
    </div>
  );
};

export default List;
