import { useDispatch } from "react-redux";
import { removeTodo,toggleTodoComplete } from "../store/todoSlice";

const TodoItem = ({id, text, completed}) => {
    const dispatch = useDispatch();
    return (
        <li>
            <input checked={completed} 
            type='checkbox'
            onChange={() => dispatch(toggleTodoComplete({id}))}/>
            <span>{text}</span>
            <span className='delete' onClick={() => dispatch(removeTodo({id}))}>&times;</span>
        </li>
    )
}
export default TodoItem;
