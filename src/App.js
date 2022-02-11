import React, { useState } from "react";
import "./index.css";
import Footer from "./Footer";
import Header from "./Header";
import Input from "./Input";
import Answer from "./Answer";

const App = () => {
    const [answer, setAnswer] = useState([]);
    const add = (val) => {
        setAnswer((old) => {
            return (
                [...old, val]
            )
        })
         alert("Title: " + val.title + " " + " Added")
    }
    const onDele=(e)=>{
        setAnswer((old)=>
        old.filter((val,ind)=>{
            return ind !== e ;
        })
        )
        let a=e+1
        alert(' box ' + a + " Deleted ");
    }

    return (
        <>

            <div className="Main-div">
                <Header />
                <Input clicked={add} />
                <div className="ans-flex">
                    {answer.map((val, index) => {
                        return (
                            <Answer 
                            id={index} 
                            key={index}
                            title={val.title} 
                            content={val.content} 
                            deleted={onDele} 
                            id1={index+1}/>
                        )
                    })
                    }


                </div>
                <Footer />
            </div>
        </>
    );
}
export default App;