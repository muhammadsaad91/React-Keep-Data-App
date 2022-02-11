// import { DeleteForeverOutlined } from "@mui/icons-material";
import DeleteForeverOutlined from "@material-ui/icons/DeleteForeverOutlined";
import React from "react";

const Answer = (props) => {
    return(
     <>
    
     
     <div className="answer-div">
         <div className="head-ans">
      <h1>{props.title}</h1>
      </div>
      <br/>
      <div className="content"><p>{props.content}</p>
     <div className="btn-flex">
     </div>  
     </div>    
     <button><DeleteForeverOutlined /></button>
     </div>



    
     </>
    )
}
export default Answer;