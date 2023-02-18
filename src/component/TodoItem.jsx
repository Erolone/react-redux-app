const TodoItem = ({id, text, completed,removeTodo,toggleTodoComplete}) => {
    return (
        <li>
            <input checked={completed} 
            type='checkbox'
            onChange={() => toggleTodoComplete(id)}/>
            <span>{text}</span>
            <span className='delete' onClick={() => removeTodo(id)}>&times;</span>
        </li>
    )
}
export default TodoItem;
