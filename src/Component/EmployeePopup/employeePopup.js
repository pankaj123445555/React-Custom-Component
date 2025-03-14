import React, { useEffect, useState } from "react";
import "./employeePopup.css"

const EmployeePopup = ({AddEmployee,hidePopup}) =>{

    const [formData,setFormData] = useState({
        name : '',
        age : ''
    })

    

    const handleChange = (e) =>{

     setFormData({
        ...formData,
        [e.target.name] : e.target.value   
     })
    }
    const handleSubmit = (e) =>{
        AddEmployee(formData);
    }

    return (
        <div className="form-cnt">
            <form onSubmit={handleSubmit}>
            <div className="pop-up-cnt">
              <div className="name-cnt">
               <label>Name : </label>
               <input maxLength={15} onChange={(e)=> handleChange(e)} name="name" required type="text"/>
              </div>
              <div className="age-cnt">
                <label>age : </label>
                <input onChange={(e)=> handleChange(e)} name = "age" required type="number"/>
              </div>
              <div className="radio-btn-cnt">
               <div>
                <label>Yes</label>
                <input required name="status" type="radio" value="yes"/>
               </div>
               <div>
                <label>No</label>
                <input required name="status" type="radio" value="No"/>
               </div>
              </div>
              <div>
               <span> <button className="submit-btn" type="submit">Submit</button></span>
               <span><button onClick={()=> hidePopup()} className="cancel-btn">cancel</button></span>
              </div>
            </div>
            </form>
        </div>
    )
}

export default EmployeePopup;