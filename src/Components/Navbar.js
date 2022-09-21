import React from "react"
function Navbar(){
    return(
        <nav  classNameName="navbar navbar-default navbar-fixed-top">
            <div  classNameName="container">
            <div  classNameName="navbar-header">
            <button type="button"  classNameName="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span  classNameName="icon-bar"></span>
                <span  classNameName="icon-bar"></span>
                <span  classNameName="icon-bar"></span>                        
            </button>
            <a  classNameName="navbar-brand" href="#myPage">Logo</a>
            </div>
            <div  classNameName="collapse navbar-collapse" id="myNavbar">
            <ul  classNameName="nav navbar-nav navbar-right">
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#services">SERVICES</a></li>
                <li><a href="#portfolio">PORTFOLIO</a></li>
                <li><a href="#pricing">PRICING</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
            </div>
           </div>
       </nav>
    )
}

export default Navbar