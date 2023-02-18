import TodoItem from "./TodoItem";
const TodoList = ({todos,removeTodo,toggleTodoComplete}) => {
    return (
        <ul>
            {
                todos.map((todo) => (<TodoItem removeTodo={removeTodo} toggleTodoComplete={toggleTodoComplete} key={todo.id} {...todo}/>))
            }
        </ul>
    );
};
export default TodoList;
