import React, { useState } from "react";
import "./index.css";
import Footer from "./Footer";
import Header from "./Header";

import DeleteForeverOutlined from "@material-ui/icons/DeleteForeverOutlined";


const App = () => {
    const [answer, setAnswer] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(null);
    const [value, setValue] = useState({
        title: '',
        content: ''
    })

    const change = (e) => {
        const { name, value } = e.target;
        setValue((old) => {
            return {
                ...old,
                [name]: value
            }
        })

        // console.log(value)
    }
    const add = () => {

        if (value.title === '' || value.content === '') {

            alert('Please fill all the fields')
        }

        else if (value && toggle) {

            setAnswer(old => {
                return old.map((item) => {
                    if (item.index === edit) {
                        return {
                            ...item,
                            title: value.title,
                            content: value.content
                        }
                    }
                    return item

                })
            })




            setValue({
                title: '',
                content: ''
            })
            setToggle(false)
        }
        else {
            // const newValue = {id: new Date().getTime().toString() , title:value.title, content:value.content}
            // console.log(newValue.title)
            setAnswer((old) => [...old, { index: new Date().getTime().toString(), title: value.title, content: value.content }])
            console.log('added')
            setValue({
                title: '',
                content: ''
            })
        }
    }

    const shrink = () => {
        setShow(false);
    }
    const expand = () => {
        setShow(true);
    }



    const deleted = (e) => {
        setAnswer((old) =>
            old.filter((val, ind) => {
                return val.index !== e;
            })
        )
        // let a=e+1
        // alert(' Box ' + a + " Deleted Successfully");
    }


    const edited = (id) => {
        setToggle(true);
        const edity = answer.find((val) => {
            return val.index === id
        })
        setValue(
            {
                title: edity.title,
                content: edity.content
            }
        )

        setEdit(id)



    }


    return (
        <>

            <div className="Main-div">
                <Header />




                <div className="input-flex" onDoubleClick={shrink}>
                    <div className="quesans" onClick={expand}>
                        {show ?
                            <input
                                type="text"
                                name="title"
                                id=""
                                placeholder="Title"
                                onChange={change}
                                value={value.title} /> : null}

                        <textarea
                            name="content"
                            id="" cols="43"
                            placeholder="Write a note..."
                            rows="3"
                            onChange={change}
                            value={value.content} ></textarea>
                        <div className="btn-flex">

                            {show ? toggle ? <button onClick={add} title="Edit Done">🖋</button> : <button title="Add Message" onClick={add}>+</button> : null}

                        </div></div>
                </div>





                <div className="ans-flex">
                    {answer.map((val, id) => {
                        return (
                            <div className="answer-div" key={val.index} id={val.index}>
                                <p>{id + 1}</p>
                                <div className="head-ans">
                                    <h1>{val.title} </h1>
                                </div>
                                <br />
                                <div className="content"><p>{val.content}</p>
                                    <div className="btn-flex">
                                    </div>
                                </div>
                                <div className="btnls">
                                    <button title="Edit Message " onClick={() => edited(val.index)}>🖋</button>
                                    <button title="Delete Message" onClick={() => { deleted(val.index) }} ><DeleteForeverOutlined /></button>
                                </div>
                            </div>

                        )
                    })}

                </div>
                <Footer />
            </div>
        </>
    );
}
export default App;