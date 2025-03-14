import React, { useEffect, useState } from "react";
import styles from "./debouncing.module.css"

// 6


const ThrotllingComponent = () =>{

    const throtlling = (callback,delay) =>{
        let prevTime = 0;
        console.log('does it calls');
       return (...arg) =>{
        let currTime = Date.now();
        if(currTime-prevTime>=delay)
            {
                callback(...arg);
                prevTime = currTime;
            }
       }
    }

    const ApiCall = () =>{
        console.log('api-called');
    }

    const throttle = throtlling(ApiCall,3000)

    return (
        <div className= {styles["main-cnt"]}>
            <div>
            <button className= {styles["btn"]} onClick={throttle}>Api Call</button>
            </div>
             
        </div>
    )
}

export default ThrotllingComponent;