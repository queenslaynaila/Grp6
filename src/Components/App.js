import React from "react";
import Navbar from "./Navbar"
import Jumbo from "./Jumbo";
import About from "./About";
import Services from "./Services"
import Contact from "./Contact";
import Pricing from "./Pricing";
import Portfolio from "./Portfolio";
import * as Footer from "./Map"
function App (){
  return (
     <>
       <Navbar></Navbar>
       <Jumbo></Jumbo>
       <About></About>
       <Services></Services>
       <Portfolio></Portfolio>
       <Pricing></Pricing>
       <Contact></Contact>
        <Footer.Map></Footer.Map>
        <Footer.Footer></Footer.Footer>
     </>
  )
}

export default App
 