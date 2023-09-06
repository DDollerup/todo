import { useState } from "react";
import { useTodoContext } from "./providers/TodoProvider";
import ListTodos from "./components/listtodos/ListTodos";

const App = () => {
  const { handleTodoAdded } = useTodoContext();

  const [todo, setTodo] = useState();

  const handleFormChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // console.log(`${name}:${value}`);
    setTodo(prevValue => ({
      ...prevValue,
      [name]: value
    }));
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    handleTodoAdded(todo);

    event.target.reset();
  }

  return (
    <div>
      <form onChange={handleFormChange} onSubmit={handleFormSubmit}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="todo">Todo</label>
          <input type="text" id="todo" name="todo" />

          <label htmlFor="category">Category</label>
          <input type="text" id="category" name="category" />

          <label htmlFor="date">Date</label>
          <input type="datetime-local" id="date" name="date" />
        </div>
        <div>
          <button>Save</button>
        </div>
      </form>

      <ListTodos />
    </div>
  );
}

export default App;
