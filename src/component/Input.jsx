import React from "react";
import {v4 as uuidv4} from "uuid";
import { useDispatch,useSelector } from "react-redux";
import { addTodo } from "../redux/action";

const Input = () =>{
const [input,setInput] = React.useState("");
const {todolist} = useSelector(state => state)

let dispatch = useDispatch();
// const state = useSelector(state => state);
//     console.log("inputstate",state)


    const handleAdd = () =>{
        let payload = {
            title : input,
            status : false,
            id : uuidv4(),
        }
        fetch(`http://localhost:8080/todo`,{
            method : "POST",
            body : JSON.stringify(payload),
            headers : {
                "content-type" : "application/json"
            }
        })
        dispatch(addTodo(payload));
        setInput("")
    }
    React.useEffect(() =>{
       todolist.length===0 ?  fetch(`http://localhost:8080/todo`)
        .then((res)=>res.json())
        .then((res) => {
            res.forEach(initData => {
                dispatch(addTodo(initData))
            });
        }) : <div></div>
    },[])

    return (<>
        <input type="text" placeholder="Type TODO..." value={input} onChange={(e)=> setInput(e.target.value)} />
        <button onClick={handleAdd} > ADD </button>
        </>)
}

export {Input}