export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_STORE = "UPDATE_STORE";
// export const DEL

 const addTodo = (payload) =>{
   return { 
    type : ADD_TODO,
    payload : payload,
}
}
const deleteTodo = (payload) =>{
  return {
    type : DELETE_TODO,
    payload : payload,
  }
}
const updateStore = (payload)=>{
  return{
    type : UPDATE_STORE,
    payload : payload,
  }
}
export {addTodo,deleteTodo,updateStore}