// import { DeleteForeverOutlined } from "@mui/icons-material";
import DeleteForeverOutlined from "@material-ui/icons/DeleteForeverOutlined";
import React from "react";

const Answer = (props) => {
    const del=(val)=>{
        props.deleted(props.id)
    }
    const edit=(val)=>{
        props.edited(props.id)
        
    }
    return(
     <>
    
     
     <div className="answer-div">
         <p>{props.id1}</p>
         <div className="head-ans">
      <h1>{props.title} </h1>
      </div>
      <br/>
      <div className="content"><p>{props.content}</p>
     <div className="btn-flex">
     </div>  
     </div>    
     <button onClick={edit}><DeleteForeverOutlined/></button>
     <button onClick={del} ><DeleteForeverOutlined /></button>
     </div>



    
     </>
    )
}
export default Answer;