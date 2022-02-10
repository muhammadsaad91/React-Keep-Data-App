import React from "react";
import "./logo.jpg"


const Header = () => {
    const pic=require("./logo.jpg")
return(
    <><div className="header">
    <img src={pic} alt="logo loading"  width="70" height='70'/>
    <h1> Saad Keep App</h1>
    </div>
    </>
)
}
export default Header ;