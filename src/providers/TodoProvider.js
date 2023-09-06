import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const useTodoContext = () => {
    const context = useContext(TodoContext);

    return context;
}

const TodoProvider = ({ children }) => {

    const [todos, setTodos] = useState([]);

    const handleTodoAdded = (todo) => {
        setTodos(prevValue => ([
            ...prevValue,
            todo
        ]));
    }

    return (
        <TodoContext.Provider value={{todos, handleTodoAdded}}>
            {children}
        </TodoContext.Provider>
    );
}

export default TodoProvider;