import React ,{ useState } from  "react";
import "./index.css";
import Footer from "./Footer";
import Header from "./Header";
import Input from "./Input";
import Answer from "./Answer";

const App = () => {
 return(
     <>
     
     <div className="Main-div">
     <Header />
     <Input />
     <Answer/>
     <Footer/>
     </div>
     </>
 )
}
export  default App ;