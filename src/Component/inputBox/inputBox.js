import React from "react";
// import { useState,useEffect } from "react";

const InputBox = ({handleDataChange,name}) =>{
    return (
        <div>
            <label>please enter an - {name}</label>
           <input name= {name} type="text" onChange={(e)=>{
            handleDataChange(e.target.name,e.target.value)
           }}/>
        </div>
    )
}

export default InputBox;