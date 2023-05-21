import { For, Show } from "solid-js";
const range: number[] = [];

const Pagination = (props) => {
  return (
    <div>
      <Show when={props.offset >= props.limit}>
        <button>Prev</button>
      </Show>
      {props.offset} {props.limit}
      <Show when={props.offset <= props.count}>
        <button onclick={props.setOffset(props.limit)}>Next</button>
      </Show>
    </div>
  );
};

export default Pagination;
