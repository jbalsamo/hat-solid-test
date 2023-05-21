import styles from "../css/List.module.css";

const ListItem = (props) => {
  return (
    <div class={`${styles.item} grid-item`}>
      <label>State: </label>
      {props.item.statedesc}&nbsp;&nbsp;&nbsp;&nbsp;<label>County: </label>
      {props.item.countyname}
      <br />
      <label>Population: </label>
      {props.item.totalpopulation}
      <br />
      <label>Cancer: </label>
      {props.item.cancer_adjprev}
      &nbsp;&nbsp;&nbsp;&nbsp;
      <label>Diabetes</label>
      {props.item.diabetes_adjprev}
    </div>
  );
};

export default ListItem;
