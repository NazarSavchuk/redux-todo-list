import { useState } from "react";

import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./slice";

import "./styles.scss";

function App() {
  const [input, setInput] = useState("");

  const count = useSelector((state) => state.todo.count);
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
  };

  const handleTodoDone = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <div className="App">
      <div className="App__header">
        <h1>
          <img
            style={{ height: "22px", marginRight: "8px" }}
            src="https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png"
            alt=""
          />
          toDO List
        </h1>
        <form className="App__form" onSubmit={handleAddTodo}>
          <input type="text" onInput={(e) => setInput(e.target.value)} />
          <button type="submit">+</button>
        </form>
      </div>

      <div className="Todos">
        {count > 0 &&
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              text={todo.text}
              id={todo.id}
              onCheck={handleTodoDone}
            />
          ))}
        {count === 0 && <p className="NotFound__block">No todos :(</p>}
      </div>

      <a
        className="source__code"
        href="https://github.com/NazarSavchuk/redux-todo-list"
        target={"_blank"}>
        Source code
      </a>
    </div>
  );
}

export default App;
