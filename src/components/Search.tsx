import styles from "../css/search.module.css";

const Search = (props) => {
  return (
    <div class={styles.searchbox}>
      <label>Search: </label>
      <input type="text" placeholder="Search Term"></input>
    </div>
  );
};

export default Search;
