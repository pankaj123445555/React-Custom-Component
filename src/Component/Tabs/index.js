import React from "react";
import { useState,useEffect } from "react";
import styles from "./index.module.css"
import { TabData } from "../../asset/Tab";
import TabList from "./TabList";
import TabDataComponent from "./TabData";

import Button from "../../customComponent/Button";


const Tabs = () =>{
    const [data,setData] = useState("");
    const [AllTabs,setAllTabs] = useState(TabData);

    const changeTab = (tab) =>{

       setData(tab.data);
       const updatedTab = AllTabs.map((item,index)=>{
          if(item.id===tab.id)
            {
               return {
                ...item,
                isActive:true
               }
            }
            return {
                ...item,
                isActive: false
            }
       })
       setAllTabs(updatedTab);
    }

    const calculateSum = (x,y) =>{
        console.log('is it called',x+y);
    }
    
    return (
        <div className={styles["tab-parent-cnt"]}>
            <div>
                <div>
                 <TabList tabs = {AllTabs} changeTab = {changeTab}/>
                </div>
                <div className={styles["tab-data-cnt"]}>
              <TabDataComponent data = {data}/>
                </div>
            </div>
            <div>
                <Button
                customClass = {styles["submit-btn"]}
                text = "Submit"
                onFunctionCall = {() => calculateSum(2,3)}
                >
                <span>Hello Brother</span>
                </Button>
            </div>
        </div>
    )
}

export default Tabs;