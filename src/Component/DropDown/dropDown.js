import React from "react";

const options = [
    {id :1,value : 'html' },
    {id :2,value : 'css' },
    {id :3,value : 'java' },
]

const DropDown = () =>{
    return (
        <div>
            <select name="naming">
                <option value='' default>select a value</option>
                {
                    options.map((item,index)=>{
                        return (
                            <option value={item.value}>
                                {item.value}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default DropDown