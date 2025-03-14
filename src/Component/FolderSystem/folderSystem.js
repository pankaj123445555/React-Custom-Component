import React from "react";
import { useState , useEffect } from "react";
import styles from "./folderSystem.module.css"
import JsonFiles from "../../asset/fileStructure.json"
import CreateStructure from "../CreateFileStructure/createFileStructure";

const FolderSystem = () =>{
    
    const [fileStructure,setFileStructure] = useState(JsonFiles.data);
    
    useEffect(()=>{
     console.log(fileStructure);
    },[fileStructure])
  
    return (
        <div className= {styles["folder-parent-cnt"]}>
           <CreateStructure files = {fileStructure}/>
        </div>
    )
}

export default FolderSystem;