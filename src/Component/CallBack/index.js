import React , {useReducer, useState} from "react";
import styles from "./index.module.css";
import { counterReducer } from "../../Reducers/CounterReducer";

const Callback = ()=>{

   
   const [state,dispatch] = useReducer(counterReducer,{count:0});
   console.log('does the component re-render');

   const handleIncrement = () =>{
       dispatch({type: "increment"})
   }

    return (
        <div className={styles["callBack-cnt"]}>
             <button onClick={()=>handleIncrement()} className={styles["counter-btn"]}>
                Count - {state.count}
             </button>
        </div>
    )
}

export default Callback; 