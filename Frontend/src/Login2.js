import React, {  useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './Login2.css'

function Login2() {
    const navigate = useNavigate()
    const [email,Setemail] = useState("");
    const [password,Setpassword] = useState("");
    const [message,Setmessage] = useState("");

     async function submit(e){
        e.preventDefault();
        axios.post("http://localhost:8000/peoplelogin2",{email,password})
        .then(result=>{
            console.log(result)
            if(result.data == "Success"){
                Setmessage("Login Sucessfull")
                navigate("/")
            }
            else{
                Setmessage("Invalid email/password")
            }
        })
        .catch((error)=>{
            console.log(error)
        })

     }
    
    

  return (
    <>
    <h1>Login page</h1>
    <form action="POST">
         <input type='email' id="email" placeholder='Enter email' value={email} onChange={(e)=>Setemail(e.target.value)}/><br></br>
        <input type='password' id="password" placeholder='Enter password' value={password} onChange={(e)=>Setpassword(e.target.value)}/><br></br>
        <input type="submit" onClick={submit}/>
        <hr></hr>
        {message}
    </form>
    </>
  )
}

export default Login2