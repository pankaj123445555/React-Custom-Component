import React , {useRef} from "react";
import styles from "./index.module.css";

const Callback = ()=>{

    const inputRef = useRef();
    return (
        <div className={styles["callBack-cnt"]}>
            <div>
            <input value={0} ref={inputRef} name="name" type="text"/>
            </div>
            <div>
                <button onClick={()=> console.log(inputRef.current.value)}>
                    Focus - 
                </button>
            </div>
        </div>
    )
}

export default Callback;