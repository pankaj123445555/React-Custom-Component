import React, { useState } from "react";
import styles from "./createFileStructure.module.css";

const CreateStructure = ({ files }) => {
    const [expandedFolders, setExpandedFolders] = useState({}); // Track expanded state for each folder

    const toggleShowButton = (id) => {
        setExpandedFolders((prev) => ({
            ...prev,
            [id]: !prev[id], 
        }));
    };

    const createFolder = (e) =>{
        e.stopPropagation();
    }

    return (
        <div>
            {files.map((item) => {
                return (
                    <div key={item.id}>
                        <div
                            onClick={() => toggleShowButton(item.id)}
                            className={styles["file-cnt"]}
                        >
                            <div className={styles["file-name"]}> {item.name}</div>
                            {item.type === "folder" ? (
                                <div>
                                    <span>
                                        <button onClick={(e)=> createFolder(e)} className={styles["create-btn"]}>Create Folder</button>
                                    </span>
                                    <span>
                                        <button className={`${styles["create-btn"]} ${styles["file-btn"]}`}>Create file</button>
                                    </span>
                                </div>
                            ) : null}
                        </div>
                        {expandedFolders[item.id] && item?.children?.length > 0 && (
                            <div className={styles["sub-files"]}>
                                <CreateStructure files={item.children} />
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default CreateStructure;
