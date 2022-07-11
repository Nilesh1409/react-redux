import React from "react";
import { Link } from "react-router-dom"
import { useSelector,  useDispatch } from "react-redux";
import { updateStore } from "../redux/action";

const InputList = () => {
    // const [todoData,setTodoData] = React.useState("")
    const todoData  = useSelector(state => state.todolist);
    const dispatch = useDispatch();
    // console.log("useSelector",todolist)
    // console.log("useState",todolist)
    React.useEffect(()=>{
        fetch(`http://localhost:8080/todo`)
        .then((res)=>res.json())
        .then((res) => {
            dispatch( updateStore(res));
            //    setTodoData(res)
            // console.log("REs",res)
        })
        // console.log("inputList",todoData)
},[])
    let getData = () =>{
        fetch(`http://localhost:8080/todo`)
    .then((res)=>res.json())
    .then((res) => {
    //    setTodoData(res)
    console.log(res)
    })
    }

    let handleToggle = (id,state) =>{
        console.log(id,"in handleToggle")
        let payload =  {status : state ? false : true}
        // let payload = {status : true}
        
        fetch(`http://localhost:8080/todo/${id}`,{
            method : "PATCH",
            body : JSON.stringify(payload),
            headers : {
                "content-type" : "application/json"
            }
        })
        .then((res) => res.json())
        .then((res) => console.log(res)
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
        .then((res) => console.log(res)
         )
    }

    return (<>
        {
            todoData? todoData.map((todos) => {
                return <div key={todos.id}>
                    <br/>
                    <Link to={`/${todos.id}`} >{todos.title}</Link>
                </div>
            }) : <div></div>
        }
    </>)
}

export { InputList }