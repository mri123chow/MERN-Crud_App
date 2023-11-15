import axios from 'axios';
import React, { useState } from 'react'

function Registration() {
    
    const [email,Setemail] = useState("");
    const [name,Setname] = useState("");
    const [password,Setpassword] = useState("");
    const [message,Setmessage] = useState("");

          const register = async ()=>{
            const mydata = {
              "name":name,
              "email":email,
              "password":password
            }
             let response =await fetch('http://localhost:5000/user_register', {
            method: 'POST',
body: JSON.stringify(mydata),
   

headers: {
   'Content-type': 'application/json; charset=UTF-8',
},
}) 
let data = await response.json() 
if(data._id != null) 
Setmessage("Question added sucessfully")
else
Setmessage("faild")
 }

           
          //Send that data to mongodb through API calling by fetch or axios

         

  return (
     <>
    <div>
    <div className="form-floating mb-3">
    <input type="text" className="form-control" id="floatingInput" placeholder="Enter Name" onChange={(e)=>Setname(e.target.value)} />
    <label htmlFor="floatingInput">Name</label>
  </div>
  <div className="form-floating mb-3">
    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e)=>Setemail(e.target.value)} />
    <label htmlFor="floatingInput">Email address</label>
  </div>
  <div className="form-floating">
    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e)=>Setpassword(e.target.value)} />
    <label htmlFor="floatingPassword">Password</label>
  </div>
  <button onClick={register}>Register</button>
  <br></br>
  {message}
</div>

     </>
  )
}

export default Registration