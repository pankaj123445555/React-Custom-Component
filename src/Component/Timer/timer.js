import React from "react";
import { useState,useEffect } from "react";
import styles from "./timer.module.css"

const Timer = () =>{
    
    const [clock,setClock] = useState({
        hour : 0,
        minute : 0,
        second : 0
    })
    const [intervalId,setIntervalId] = useState(null);

    useEffect(()=>{

        return ()=>{
            if(intervalId!=null)
                {
                    clearInterval(intervalId);
                }
        }

    },[])

    const changeTimer = (key,value) =>{
        
        setClock({
            ...clock,
            [key]: Number(value)
        })
    }

    const startTimer = () =>{
        
        console.log('does it calls');
        const id = setInterval(()=>{
           setClock((prev)=>{
            return {
                hour   : prev.minute===59&&prev.second===59? prev.hour+1:prev.hour,
                minute: prev.second===59? ((prev.minute+1)%60):prev.minute,
                second: (prev.second+1)%60, 
            }
           })
        },1000)
        setIntervalId(id);
    }
    useEffect(()=>{
     console.log(clock);
    },[clock])

    const stopTimer = () =>{
        clearInterval(intervalId);
        setIntervalId(null);
    }
    const formatTime = (time) =>{
          return String(time).padStart(2,'0');
    }

    return (
        <div className={styles["timer-parent-cnt"]}>
            <div>
             <div>
                <h1>Timer</h1>
             </div>
             <div className= {styles["clock-cnt"]}>
              {
                Object.entries(clock).map(([key,value],index)=>{
                    return (
                        <div key={index} className={styles["timer-cnt"]}>
                            <span className={styles["timer-text"]}>{key}</span>
                            <span className={styles["timer-value"]}>
                                <input disabled = {intervalId!==null} onChange={(e)=> changeTimer(e.target.name,e.target.value)} name={key} className={styles["timer-input"]} value={formatTime(value)}/>
                            </span>
                        </div>
                    )
                })
              }
             </div>
            </div>
            <div className= {styles["start-btn-cnt"]}>
                <span>
              <button className= {styles["btn"]} onClick={()=> startTimer()}>
                Start
              </button>
              </span>
              <span>
              <button style={{marginLeft: '10px'}} className= {styles["btn"]} onClick={()=> stopTimer()}>
                Stop
              </button>
              </span>

            </div>
        </div>
    )
}

export default Timer;


 