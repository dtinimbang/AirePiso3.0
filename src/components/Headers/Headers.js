import React, { Component} from 'react'
import ReactDOM from 'react-dom'

const Headers = () => (
  <header> 
  <div className="logo"> LOGO </div>

  <nav>
   <a href = "#"> home </a>
   <a href = "about"> about us </a>
   <a href = "#"> login </a>
   <a href = "calc"> Mortgage Calculator </a>
   <a href = "#" className ="register-btn"> Register </a>

 </nav>
   
 </header>
)

export default Headers