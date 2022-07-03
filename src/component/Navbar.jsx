import React from "react";
import {Link} from "react-router-dom"



const Navbar = () =>{
    return <div className="navbar">
    {/* <div>home</div> */}
    <Link to="/" >Home</Link>
    <Link to="/:id" >Product</Link>
    </div>
}

export {Navbar};