import React from "react";
import { useState,useEffect,useRef } from "react";
import styles from "./index.module.css";


const ProgressBar = () =>{


    const [progressBarWidth,setProgressBarWidth] = useState(0);
    const interValRef = useRef(null);

    const startProgress = () => {
       
        if(interValRef.current)return;
         
        interValRef.current = setInterval(() => {
            setProgressBarWidth((prevWidth) => {
                if (prevWidth >= 100) {   
                    clearInterval(interValRef.current); 
                    return 100;   
                }
                return prevWidth + 1;
            });
        }, 1000);
    };

    useEffect(()=>{
     startProgress();
    },[])


    return (
        <div className={styles["progress-bar-parent-cnt"]}>
            <div role="alert">this is your progress bar component </div>
            <div>
                <div className={styles["progress-bar-upper-cnt"]}>
                  <div style={{width: `${progressBarWidth}%`}} className={styles["progress-bar-inner-cnt"]}>
                   <span>{progressBarWidth}%</span>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;