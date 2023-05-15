import styles from "../css/List.module.css";

const ListItem = (props) => {
  return (
    <div class={styles.item}>
      <label>State: </label>
      {props.item.statedesc}
      <br />
      <label>County: </label>
      {props.item.countyname}
      <br />
      <label>Population: </label>
      {props.item.totalpopulation}
      <br />
      <label>Cancer: </label>
      {props.item.cancer_adjprev}
      <br />
    </div>
  );
};

export default ListItem;
