import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/action";

const ProductPage = ()=>{
    const [todoData, setTodoData] = React.useState("")
    const {id} = useParams();
    let dispatch = useDispatch()
    // console.log("from param",id)
    React.useEffect(() =>{
        fetch(`http://localhost:8080/todo/${id}`)
        .then((res) =>res.json())
        .then((res) => setTodoData(res))
        console.log("landingData", todoData)
    },[])
    let handleToggle = (id) =>{
        let payload =  {status : todoData.status ? false : true}
        
        
        fetch(`http://localhost:8080/todo/${id}`,{
            method : "PATCH",
            body : JSON.stringify(payload),
            headers : {
                "content-type" : "application/json"
            }
        })
        .then((res) => res.json())
        .then((res) => setTodoData(res)
         )
    }
    let handleRemove = (id) =>{
        fetch(`http://localhost:8080/todo/${id}`,{
            method : "DELETE",
            headers : {
                "content-type" : "application/json"
            }
        })
        .then((res) => res.json())
        .then((res) => setTodoData(res)
         )
         dispatch(deleteTodo(id))
    }
    
    return  <>
     { todoData ? 
    <div key={todoData.id} >
        <div>{todoData.title} {`-->`} {
              todoData.status ?<div>COMPLETE</div> : <div>INCOMPLETE</div>
        }
        </div>
        
    </div>
    : <div>Loading...</div>
    }   
    <button onClick={() =>{ handleToggle(id)}} >TOGGLE</button> 
    <button onClick={() =>{ handleRemove(id)}} >REMOVE</button> 
    </>
}
export {ProductPage}