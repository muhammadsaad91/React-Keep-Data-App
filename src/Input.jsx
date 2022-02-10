import React from "react";

const Input = () => {
    return(
        <>
       <div className="input-flex">
       <div className="quesans">
            <input type="text" name="title" id="" placeholder="Title"/>
          <textarea name="content" id="" cols="43" placeholder="Write a note..." rows="6"></textarea>
        <div className="btn-flex">  
        
            <button>+</button></div>
        </div>
       </div>
        </>
    )
}
export default Input;