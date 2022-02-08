// import { useState } from "react";
import Data from "./Data";
import './index.css';
import { useState } from "react";
const Quesans= (props) => {
    const [count, setCount] = useState(false);
   
 return(
     <>
       <div className="quesans"><div className="ques">
           
<button onClick={()=>{setCount(!count) }} >{count? "➖":"➕"}</button>
<div className="ques-flex">
        <h1>{props.ques}</h1>
        </div>
        </div>
        <div className="ans">
            {count &&         <p>{props.answer}</p>}
        {/* <p>{props.id}</p> */}
        </div></div>
     </>
 )
}
export default Quesans;