import { useTodoContext } from "../../providers/TodoProvider";

const ListTodos = () => {
    const { todos } = useTodoContext();

    return (
        <section>
            <ol>
                {
                    todos.map(t => (
                        <li>What: {t.todo} Category: {t.category} When: {t.date}</li>
                    ))
                }
            </ol>
        </section>
    );
}

export default ListTodos;