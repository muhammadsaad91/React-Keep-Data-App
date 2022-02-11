import React from "react";
import { useState } from "react";

const Input = (props) => {
    const [value, setValue] = useState({
        title: "",
        content: "",
    })
 const change = (event) => {
    const { name, value } = event.target;    
    setValue((old)=>{
            return{
                ...old,
                [name]: value

            }
        }) 
}
const click = () => {
     props.clicked(value);
}

    return (
        <>
            <div className="input-flex">
                <div className="quesans">
                    <input type="text" name="title" id="" placeholder="Title" onChange={change} value={value.title} />
                    <textarea name="content" id="" cols="43" placeholder="Write a note..." rows="6" onChange={change} value={value.content} ></textarea>
                    <div className="btn-flex">

                        <button onClick={click} >+</button></div>
                </div>
            </div>
        </>
    )
}
export default Input;