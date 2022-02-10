import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
return(
    <>
    <div className="foot-flex"><footer className="footer" >⚡ Copyright SaAd App © {year}</footer>
    </div>
    </>
);
}
export default Footer ;