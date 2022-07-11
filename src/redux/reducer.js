import { ADD_TODO,DELETE_TODO,UPDATE_STORE } from "./action"
// const init = {} 

export const reducer = (state = {todolist : []},{type,payload}) =>{
    switch(type){
        case ADD_TODO :
        return {
            //  ...state,
             todolist : [...state.todolist,payload]
        }
        case DELETE_TODO :
            return{
                todolist : state.todolist.filter((todo)=>todo.id!==payload )
            }
        case UPDATE_STORE :
            return {
                todolist : payload
            } 
        default : {
            return state;
        }
    }
}