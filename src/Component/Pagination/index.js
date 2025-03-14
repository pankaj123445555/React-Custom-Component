import React, { useEffect } from "react";
import styles from "./index.module.css"
import { useState } from "react";

const Pagination = () =>{
    const [activePage,setActivePage] = useState(1);

    // const pages = Array.from({ length: 50 }, (_, i) => i + 1);
    const [startItem,setStartItem] = useState([]);


    const backToPreviousPage = () =>{
        setActivePage((prevPage)=>prevPage-1)
    }
    const backToNextPage = ()=>{
        setActivePage((prevPage)=>prevPage+1)
    }

    const generatePagination = (totalPages) => {
        const pages = [];
        const range = 2; // Show ±2 pages around the active one
        let flag = 0;
        for (let i = 1; i <= totalPages; i++) {
          if (
            i === 1 || // First page
            i === totalPages || // Last page
            (i >= activePage - range && i <= activePage + range) // Pages near active
          ) {
            pages.push(i);
          } else if (!flag) {
            flag =1;
            pages.push("...");
            
          }
        }
    
        return pages;
      };

      

    return (
        <div className= {styles["pagination-cnt"]}>
             <div className={styles["prev-btn"]}>
                <button onClick={()=> backToPreviousPage()} className= {styles["btn"]}>Prev</button>
            </div> 
            <div className={styles["page-text-cnt"]}>
            {generatePagination(50).map((page, index) => (
          <span
            key={index} // Use index for "..." cases, since it's not unique
            className={`${styles["page"]} ${page === activePage ? styles["active-page"] : ""}`}
            onClick={() => typeof page === "number" && setActivePage(page)}
            style={{ cursor: page === "..." ? "default" : "pointer" }}
          >
            {page}
          </span>
        ))}
            </div>
            <div className={styles["next-btn-cnt"]}>
            <button onClick={()=> backToNextPage()} className= {styles["btn"]}>
                Next
            </button>
            </div>
        </div>
    )
}

export default Pagination;