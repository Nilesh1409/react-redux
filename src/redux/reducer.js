import { ADD_TODO,DELETE_TODO } from "./action"
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
                todolist : state.todolist.map((todos)=>{
                    return ( 
                        todos.id !== payload ? todos : ""
                        )
                })
            }
        default : {
            return state;
        }
    }
}