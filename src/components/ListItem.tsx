import styles from "../css/List.module.css";

const ListItem = (props) => {
  return (
    <div class={styles.item}>
      Region: {props.region}
      <br />
      Period: {props.period}
      <br />
      immunization_measure: {props.im}
    </div>
  );
};

export default ListItem;
