import React from "react";
import styles from "./sidebar.module.css"
import sideBarData from "../../asset/sideBarContent.json"
import SideBarList from "../SidebarList/sideBarList";


const SideBarComponent = () =>{
     
    return (
        <div className= {styles["side-bar-cnt"]}>
            <SideBarList data = {sideBarData.data}/>     
        </div>
    )
}

export default SideBarComponent;