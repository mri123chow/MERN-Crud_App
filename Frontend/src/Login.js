import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [name, Setname] = useState("");
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [message, Setmessage] = useState("");

  async function login() {
    const mydata = {
      name: name,
      email: email,
      password: password,
    };
    let response = await fetch("http://localhost:8000/peoplelogin", {
      method: "POST",
      body: JSON.stringify(mydata),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    let data = await response.json();
    if (data._id != null) {
      Setmessage(<h5>Sucessfully Registered</h5>);
      // navigate('/login')
    } else {
      Setmessage(<h6>Faild/Someone is allready registered with this email</h6>);
    }
    setTimeout(() => {
      Setmessage("");
    }, 3000);
  }
  return (
    <>
      <h1>Sign up page</h1>
      <input
        type="text"
        id="name"
        className="name"
        placeholder="Entre name"
        value={name}
        onChange={(e) => Setname(e.target.value)}
      />
      <br></br>
      <input
        type="email"
        id="email"
        className="email"
        placeholder="Entre email"
        value={email}
        onChange={(e) => Setemail(e.target.value)}
      />
      <br></br>
      <input
        type="password"
        id="password"
        className="password"
        placeholder="Entre password"
        value={password}
        onChange={(e) => Setpassword(e.target.value)}
      />
      <br></br>
      <button onClick={login}>Signup</button>
      <p>
        if allready register <Link to="/login">Login page</Link>{" "}
      </p>
      <hr></hr>
      {message}
    </>
  );
}

export default Login;
