import React from "react";

 const CheckBoxComponent = ({label,value,id, handlePasswordGeneratorCheckBox}) =>{
    return (
        <div>
             <input onChange={(e)=> handlePasswordGeneratorCheckBox(e,id)} type="checkbox" checked={value}/>
             <label>{label}</label>
        </div>
    )
}

export default CheckBoxComponent