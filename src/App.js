import React ,{ useState } from  "react";
import "./index.css";
import Footer from "./Footer";
import Header from "./Header";
import Input from "./Input";
import Answer from "./Answer";

const App = () => {
    const [userInput, setUserInput] = useState([]);
    const submit = (value) => {
    //    alert("Hello");
       setUserInput((oldval) => {
           return [...oldval, value];
        });
           console.log(userInput);

    }
 return(
     <>
     
     <div className="Main-div">
     <Header />
     <Input clicked={submit} />
     <div className="ans-flex">
     {userInput.map((value, index) => {
            return <Answer key={index} id={index} title={value.title} content={value.content} />
     }
    )}
        </div>
     <Footer/>
     </div>
     </>
 )
}
export  default App ;