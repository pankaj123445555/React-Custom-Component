import React, { useEffect } from "react";
import { useState} from "react";
import "./employeemanagement.css"
import EmployeePopup from "../EmployeePopup/employeePopup";
import EmployeeList from "../EmployeeList/employeeList";
import { debounce } from "lodash";
import { useRef } from "react";


const EmployeeMamnagement = () =>{
   
     const [addEmployeeModal,setAddEmployeeModal] = useState(false);
     const [selectedEmployee,setSelectedEmployee] = useState({});
     const [employeeData,setEmployeeData] = useState([]);
     const handleEmployeeSelection = (employee) =>{
      setSelectedEmployee(employee);
     }
     const showPopup = () =>{
        setAddEmployeeModal(true)
     }
     const hidePopup = () =>{
          setAddEmployeeModal(false)
     }

     const AddEmployee = (employee) =>{
      setEmployeeData([...employeeData,employee])
       hidePopup();
     }

     const callApi = async () => {
     
        let data = await fetch('https://jsonplaceholder.typicode.com/todos');
        const jsonData = await data.json();
        console.log(jsonData);
     }
     
     const debouncedFetch = debounce(callApi, 3000);

      
        const divRef = useRef(null);
      
        const enterFullScreen = () => {
            if (document.documentElement.requestFullscreen) {
              document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
              document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
              document.documentElement.webkitRequestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
              document.documentElement.msRequestFullscreen();
            }
          };
    

    return (
        <div ref={divRef}>
        <div className="employee-cnt">
        <div className="btn-cnt">
        <span>
            <button className="add-employee-btn" onClick={()=> debouncedFetch()}>FETCH DATA</button>
        </span>
        <span>
            <button className="add-employee-btn" onClick={()=> showPopup()}>ADD Employee</button>
        </span>
        </div>
        <div className="employee-list-details-cnt">
        <div>
            <EmployeeList employeeData = {employeeData} selectEmployee = {handleEmployeeSelection}/>
        </div>
        <div className="selected-employee">
           {
             selectedEmployee?.name
           }
        </div>
        </div>
        </div>
        {
            addEmployeeModal&&<EmployeePopup AddEmployee = {AddEmployee} hidePopup = {hidePopup}/>
        }
        <div>
            <button onClick={()=> enterFullScreen()} className="add-employee-btn">Enable Full screen mode</button>
        </div>
        </div>
    )
}

export default EmployeeMamnagement
