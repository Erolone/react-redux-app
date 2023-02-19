import { bindActionCreators, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:'todos',
    initialState:{
        todos:[],
    },
    reducers:{
        addTodo(state,action){
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed:false,
            });
        },
        removeTodo(state,action){},
        toggleTodoComplete(state,action){},
    },
});
export const {addTodo,toggleTodoComplete,removeTodo} = todoSlice.actions;
export default todoSlice.reducer;