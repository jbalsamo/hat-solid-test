import { For, Show } from "solid-js";
import ListItem from "../components/ListItem";
import styles from "../css/List.module.css";

const List = (props) => {
  // let page = await props.data.slice(props.offset, props.offset + props.limit);
  return (
    <div class={`${styles.list} grid-container`}>
      <For each={props.data}>{(record) => <ListItem item={record} />}</For>
    </div>
  );
};

export default List;
