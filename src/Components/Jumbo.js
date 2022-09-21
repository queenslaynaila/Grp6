import React from "react";

function Jumbo(){
    return(
            <div  classNameName="jumbotron text-center">
              <h1>Company</h1> 
              <p>We specialize in blablabla</p> 
              <form>
                 <div  classNameName="input-group">
                    <input type="email"  classNameName="form-control" size="50" placeholder="Email Address" required/>
                    <div  classNameName="input-group-btn">
                         <button type="button"  classNameName="btn btn-danger">Subscribe</button>
                    </div>
                 </div>
              </form>
         </div>
    )
}

export default Jumbo