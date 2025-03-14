import React from "react";
import { useState, useEffect,useMemo } from "react";
// import useFetch from "../../CustomHokk/useFetch";

const calculates = (x) => {
    console.log("does it call again?");
    let sum = x;
    for (let i = 0; i < 1000; i++) {
        sum += i;
    }
    return sum;
};

const CustomHook = () =>{
    
   

    const [count,setCount] = useState(0);

    const sum = useMemo(()=>calculates(),[count]);
    const [arr,setArr] = useState([1,2,3,4,5]);

    const swapping = () =>{
        const newArr = [...arr];
        let x = newArr[1];
        newArr[1] = newArr[0];
        newArr[0] = x;
        setArr(newArr);
    }
    
   
    return (
        <div>
          {
            arr.map((item,index)=>{
                return (
                    <div key={index}>
                        {item}
                    </div>
                )
            })
          }
          <div>
            <button onClick={()=> swapping()}>Swap</button>
          </div>
        </div>
    )
}

export default CustomHook