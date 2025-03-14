import React, { useEffect, useState } from "react";
import styles from "./debouncing.module.css"


const Debouncing = () =>{

    const [searchText,setSearchText] = useState("");
    const debounce = (callback, delay = 4000) => {
        let timeoutId; // Store timeout across function calls
      
        return (...args) => {
            console.log(...args)
            clearTimeout(timeoutId);  
            timeoutId = setTimeout(() => {
                console.log('Hi! pankaj');
                callback(...args);  
            }, delay);
        };
    };
    
    
    

    const handleChange = (e) =>{
        console.log(e);
       setSearchText(e.target.value);
    }
    const debouncedSearch = debounce(handleChange,3000);
    return (
        <div className= {styles["main-cnt"]}>
            <div>
             <input onChange={debouncedSearch} name="name"/>
            </div>
            <div>
                <span>Searching.......</span>
                <span>{searchText}</span>
            </div>
        </div>
    )
}

export default Debouncing;