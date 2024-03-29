const TodoItem = (props) => {
  const deleteTodo = () => {
    props.onCheck(props.id);
  };
  return (
    <div className="todo" onClick={deleteTodo}>
      <label>{props.text}</label>
    </div>
  );
};

export default TodoItem;
