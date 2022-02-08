import { useState } from  "react";
// import reactDOM from "react-dom";
// import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import "./index.css"
import Data from './Data'
import Quesans from "./Quesans";

const App = () => {
       return(
    <>
<div className="Main-div">
    <div className="inner-div">
<div className="header"><h1>Most Interview Questions</h1></div>
{Data.map((item,index)=>{
    return(
        <Quesans key={item.id} ques={item.Ques} answer={item.answer} />
        )
 })}

</div>
</div>

    </>
    
)
}
export  default App ;