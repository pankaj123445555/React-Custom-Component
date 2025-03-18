import React from "react";
import { useState,useEffect } from "react";
import styles from "./index.module.css"


const TabList = ({tabs,changeTab}) =>{
    return (
        <div className={styles["tab-list-cnt"]}>
         {
            tabs.map((item,index)=>{
                return (
                    <div className= {styles["each-tab"]} key={item.id}>
                        <button className= {item.isActive? styles["active"]:styles["not-active"]} onClick={()=> changeTab(item)}>
                            {item.name}
                        </button>
                    </div>
                )
            })
         }
        </div>
    )
}

export default TabList;