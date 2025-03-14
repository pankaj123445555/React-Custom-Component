import React from 'react';
import "./employeeList.css";


const EmployeeList = ({employeeData ,selectEmployee}) =>{
    return(
        <div className='emp-list'>
             {
                employeeData.map((employee,index)=>{
                    return (
                        <div onClick={()=> selectEmployee(employee)} key={index} className='emp-details'>
                            <div className='detail-row'>
                                <span className='label'>Name </span>
                                <span className='separator'>:</span>
                                <span className='value'>{employee.name}</span>
                            </div>
                            <div className='detail-row'>
                                <span className='label'>Age </span>
                                <span className='separator'>:</span>
                                <span className='value'>{employee.age}</span>
                            </div>
                        </div>
                    )
                })
             }
        </div>
    )
}

export default EmployeeList