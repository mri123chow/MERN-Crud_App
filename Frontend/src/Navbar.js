import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function Navbar() {
  return (
    <>
    <ul>
        <div className='signup'><Link to ="/signup">SignUp</Link></div>
         <div className='login'><Link to="/login">Login</Link></div>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/add_questions"><li>Add Questions</li></Link>
        <Link to="/display_questions"><li>Display Questions</li></Link>
        
       
        
        
        
       
    </ul>
    </>
  )
}

export default Navbar