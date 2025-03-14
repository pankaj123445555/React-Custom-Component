import React, { act, useEffect, useState } from "react";
import styles from "./sideBarList.module.css";


const SideBarList = ({ data, parentKey = "" }) => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (itemKey) =>{
   setExpanded((prev)=>{
      if(!prev[itemKey])
        {
            return {
                ...prev,
                [itemKey] : {
                   active : true,
                   expand : true
                }
            }
        }
        let obj = {};
        for(let key of Object.keys(prev))
            {
               if(key===itemKey)
                {
                    console.log('does it calls')
                    obj[key] = {
                        ...prev[key],
                        active : !prev[key]["active"],
                        expand : !prev[key]["expand"]
                    }
                }
                else
                {
                    obj[key] = {
                        active: false, // Collapse other items
          expand: false 
                    }
                }
            }
            console.log(obj);
            return obj
   })
  }

 

  return (
    <div className={styles["side-bar-list-cnt"]}>
      {data.map((item, index) => {
        const itemKey = `${parentKey}-${index}`;  
        return (
          <div key={itemKey}>
            <div
              onClick={() => toggleExpand(itemKey)}
              className={styles["item-name"]}
            >
             <span className={expanded?.[itemKey]?.active? styles["active"]:styles["not-active"]}> {item.name}  </span>
              {item.subitem && <span className={styles["icon-cnt"]}>{expanded?.[itemKey]?.["expand"] ? "^" : "V"}</span>}
            </div>

            {expanded?.[itemKey]?.["expand"] && item?.subitem?.length > 0 && (
              <div className={styles["subitem-container"]}>
                <SideBarList data={item.subitem} parentKey={itemKey} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SideBarList;
