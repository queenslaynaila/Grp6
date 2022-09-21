import React from "react";

function Map(){
    return(
         <img  className = "map"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8wHw9GLuCCNxCq4dbvuHo_2h6eg68h1sGTpaAcmIu&s"></img>
    )
}

function Footer(){
    return(
        <footer class="container-fluid text-center">
        <a href="#myPage" title="To Top">
          <span class="glyphicon glyphicon-chevron-up"></span>
        </a>
        <p>Bootstrap Theme Made By <a href="https://www.w3schools.com" title="Visit w3schools">www.w3schools.com</a></p>
      </footer>
    )
}


export {Map,Footer}