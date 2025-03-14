import React from "react";
import style from "./index.module.css"
import { useState,useEffect } from "react";
import imageDataJson from "../../asset/imageData.json"
import Loader from "../Loader";

const InfiniteScrollBar = () =>{
   
    const [imageData,setImageData] = useState([]);
    const [itemPerPage,setItemPerPage] = useState(6);

    useEffect(()=>{
    setImageData(imageDataJson.data.slice(0,itemPerPage));
    },[]);

    useEffect(()=>{
    console.log(imageData);
    },[imageData])

    const debounce = (callback, delay) => {
        let timeoutId;
    
        return (...args) => {
            clearTimeout(timeoutId);  
    
            timeoutId = setTimeout(() => {
                callback(...args);  
            }, delay);
        };
    };

    const handleScroll = () =>{
        console.log('when it calls')
        setImageData([...imageData,...imageDataJson.data.slice(imageData.length,imageData.length+itemPerPage)])
    }

    const Debouncing = debounce(handleScroll,5000);

   

    return (
        <div className= {style["main-cnt"]}>
            <div>
                <h1>Infinite Scroll Bar</h1>
            </div>
           <div onScroll={Debouncing} className= {style["infinite-scroll-parent-cnt"]}>
            <div className= {style["infinite-scroll-cnt"]}>
            {
                imageData.map((image,index)=>{
                        return (
                            <div key={index} className={style["img-cnt"]}>
                            <img src= {image.imageUrl} alt="not-found"/>
                            </div>
                        )
                })
            }
            </div>
            <div className= {style["loader-cnt"]}>
                <Loader/>
            </div>
           </div>
        </div>
    )
}

export default InfiniteScrollBar;


