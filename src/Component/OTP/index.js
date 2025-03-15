import React from "react";
import { useState,useEffect,useRef } from "react";
import styles from "./index.module.css"

const Otp = () =>{

    const inputRef_$ = useRef(null);
    const [otpInput,setOtpInput] = useState([
        {
            id : 0,
            value: ""
        },
        {
            id : 1,
            value: ""
        },
        {
            id : 2,
            value: ""
        },{
            id : 3,
            value: ""
        },{
            id : 4,
            value: ""
        },
        {
            id : 5,
            value: ""
        }

    ])
   const inputRef = useRef([]);
    const handleOtpChnage = (e,otpItem) =>{

        console.log(e.target.value)
        if(e.target.value==="")
            {
                return;
            }
    const updatedOtpItemArray = otpInput.map((otp,index)=>{
        if(otp.id===otpItem.id)
            {
                return{
                    ...otp,
                    value: e.target.value
                }
            }
            return otp
    })
    setOtpInput(updatedOtpItemArray);
     inputRef.current[(otpItem.id+1)%6].focus();
    }
    const handleBackSpace = (val,otpItem) =>{
       if(otpItem.value==="")
        {
            console.log('does it calls',otpItem.id);
            inputRef.current[otpItem.id-1].focus();
            return; 
        }
        const updatedOtpItemArray = otpInput.map((otp,index)=>{
            if(otp.id===otpItem.id)
                {
                    return{
                        ...otp,
                        value: val
                    }
                }
                return otp
        })
        setOtpInput(updatedOtpItemArray);
      inputRef.current[(otpItem.id-1)%6].focus();
    }
    const handleKeyEvent = (e,otpItem) =>{
        // console.log(e,otpItem);
       if(e.key==="Backspace")
        {
           handleBackSpace(e.target.value,otpItem)
        }
    }
    useEffect(()=>{
        inputRef.current[0].focus();
    },[])
    return (
        <div className= {styles["otp-cnt"]}>
           <div className={styles["otp-list"]}>
            {
                otpInput.map((item,index)=>{
                    return (
                        <input
                        key={item.id}
                        
                    className={styles["otp-input"]}
                     type="number"
                     ref={(el)=> (inputRef.current[item.id]=el)}
                     onChange={(e)=> handleOtpChnage(e,item)}
                     onKeyDown={(e)=> handleKeyEvent(e,item)}
                    />
                    )
                })
            }
           </div>
           <div className={styles["btn-cnt"]}>
            <button className={styles["submit-btn"]}>
                Submit
            </button>
           </div>
        </div>
    )
}

export default Otp;
