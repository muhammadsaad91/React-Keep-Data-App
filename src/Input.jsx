import React from "react";
import { useState } from "react";

const Input = (props) => {
    const [show, setShow] = useState(false);
    const [value , setValue] = useState({
        title:'',
        content:''
    })

const change =(e)=>{
    const {name,value} = e.target;
    setValue((old)=>{
        return{
            ...old,
            [name]: value
        }
    })
    
    console.log(value)
}
const click=()=>{
    if (value.title === '' || value.content === '') {
        alert('Please Enter Something in the Inputs');
        
    } else {
        props.clicked(value)
    
        setValue({
            title: '',
            content: ''
        });    }
    
}
const shrink=()=>{
    setShow(false);
}
const expand=()=>{
    setShow(true);
}
    return (
        <>
            <div className="input-flex" onDoubleClick={shrink}>
                <div className="quesans" onClick={expand}>
                {show ? 
                     <input 
                     type="text"
                      name="title" 
                      id="" 
                      placeholder="Title" 
                      onChange={change} 
                      value={value.title} /> : null }
                    
                    <textarea 
                    name="content" 
                    id="" cols="43" 
                    placeholder="Write a note..." 
                    rows="3" 
                    onChange={change} 
                    value={value.content} ></textarea>
                    <div className="btn-flex">

                        {show ? <button onClick={click}>+</button> : null}
                </div></div>
            </div>
        </>
    )
}
export default Input;