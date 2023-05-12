import { For, Show } from "solid-js";
import ListItem from "../components/ListItem";
import styles from "../css/List.module.css";

const List = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        {props.title} by {props.author}
      </h1>
      <h3>{props.children}</h3>
      <For each={props.data}>
        {({ region, period, immunization_measure }) => (
          <Show when={props.low <= +immunization_measure <= props.high}>
            <ListItem
              region={region}
              period={period}
              im={immunization_measure}
            />
          </Show>
        )}
      </For>
    </div>
  );
};

export default List;
