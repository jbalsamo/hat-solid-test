const List = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        {props.title} by {props.author}
      </h1>
      <h3>{props.children}</h3>
    </div>
  );
};

export default List;
