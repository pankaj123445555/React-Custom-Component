import React from "react";
import styles from "./index.module.css";

const Button = ({customClass,text,onFunctionCall,children}) =>{
    return (
          <button
           className={`${styles["btn"]} ${customClass}`}
           onClick={()=> onFunctionCall()}
           >
             {children}
          </button>
    )
}

export default Button;