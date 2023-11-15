import React from 'react'
import {Routes,Route} from "react-router-dom"
import Navbar from './Navbar'
import Admin from './Admin'
import Question from './Question'
import Home from './Home'
import About from './About'
import Login from './Login'
import Login2 from './Login2'
import Update from './Update'





function App() {
  return (

    <>
    

    <Navbar></Navbar>


    <Routes>
      <Route path="/login" element={<Login2></Login2>}/>
      <Route path="/signup" element={<Login></Login>}/>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/about" element={<About></About>}/>
      <Route path="/add_questions" element={<Admin></Admin>}/>
      <Route path="/display_questions" element={<Question></Question>}/>
      
      
      <Route path="/update/:id" element={<Update></Update>}/>
      

    </Routes>
    </>
  )
}

export default App