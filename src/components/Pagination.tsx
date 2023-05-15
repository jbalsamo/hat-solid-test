import { For, Show } from "solid-js";
const range: number[] = [];

const Pagination = (props) => {
  return (
    <div>
      <Show when={props.offset > props.limit}>
        <button>Prev</button>
      </Show>
      <Show when={props.offset < props.limit}>
        <button>Next</button>
      </Show>
    </div>
  );
};

export default Pagination;
