import React from 'react'
import GoogleLogin from 'react-google-login';

 
const responseGoogle = (response) => {
  console.log(response);
}



const Headers = () => (
  <header> 
  <div className="logo"> LOGO </div>

  <nav>
   <a href = "#"> home </a>
   <a href = "about"> about us </a>
   <a href = "#"> login </a>
   <a href = "calc"> Mortgage Calculator </a>
   
  <GoogleLogin
    clientId="562860191240-mi3o5id8mqhkvesihoo688elp5pj5q74.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />


   {/* <a href = "#" className ="register-btn"> Register </a> */}


 </nav>
   
 </header>
)

export default Headers