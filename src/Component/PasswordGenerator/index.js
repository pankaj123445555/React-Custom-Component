import React from "react";
import { useState,useEffect } from "react";
import { PasswordCombination } from "../../asset/passwordText";
import styles from "./index.module.css"
import CheckBoxComponent from "../CheckBox/checkbox";

const PasswordGenerator = () =>{

    const [includedField,setIncludedField] = useState([
       { 
        id : 1,
        label : "upperCase",
        value: false
       },
       { 
        id : 2,
        label : "lowerCase",
        value: false
       },
       { 
        id : 3,
        label : "numbers",
        value: false
       },
       {
         id : 4,
         label : "symbols",
        value: false
       },
    ])
    const [generatedPassword,setGeneratedPassword] = useState("");
  
    const generatePassword = (passwordLength) =>{
        let mixedCombinationPasswordLetters = [];
        let flag =0;
        includedField.forEach((item,index)=>{
            if(item.value)
                {
                    flag =1;
                    mixedCombinationPasswordLetters.push(...PasswordCombination[item.label]); 

                }
        })
        if(flag===0)return;
       let size = mixedCombinationPasswordLetters.length;
       console.log(mixedCombinationPasswordLetters);
       console.log(size);
       let str = ''
       for(let i=0;i<passwordLength;i++)
        {
            // console.log(i);
           str = str + mixedCombinationPasswordLetters[Math.floor(Math.random()*size)]
        }
        setGeneratedPassword(str);
        
    }

    const handlePasswordGeneratorCheckBox = (e,id) =>{
       const updatedIncludePasswordField = includedField.map((item,index)=>{
          if(item.id===id)
            {
                return{
                    ...item,
                    value:e.target.checked
                }
            }
            return item
       })
       setIncludedField(updatedIncludePasswordField);
       
    }

    return (
        <div className={styles["main-cnt"]}>
            <div className={styles["password-cnt"]}>
                <span>Generated Password : </span>
                <span className={styles["generated-password"]}>{generatedPassword}</span>
            </div> 
            <div>
               {
                  includedField.map((item,index)=>{
                    return (
                        <div key={item.id}>
                            <CheckBoxComponent handlePasswordGeneratorCheckBox={handlePasswordGeneratorCheckBox} label={item.label} value={item.value} id={item.id}/>
                        </div>
                    )
                  })
               }
            </div>
            <div>
             <button onClick={()=> generatePassword(10)} className={styles["generate-password-btn"]}>
               Generate Password
             </button>
            </div>
        </div>
    )
}

export default PasswordGenerator;

