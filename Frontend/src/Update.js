import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';

function Update() {
  const [question,Setquestion] = useState("");
  const [option1,Setoption1] = useState("");
  const [option2,Setoption2] = useState("");
  const [option3,Setoption3] = useState("");
  const [option4,Setoption4] = useState("");
  const [answer,Setanswer] = useState("");
  const [message,Setmessage] = useState("");
  const params = useParams()
  const navigate = useNavigate()



  useEffect(()=>{
    axios.get(`http://localhost:8000/updatequestion/${params.id}`)
    .then((result)=>{
      
      Setquestion(result.data.question)
      Setoption1(result.data.option1)
      Setoption2(result.data.option2)
      Setoption3(result.data.option3)
      Setoption4(result.data.option4)
      Setanswer(result.data.answer)

    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

 

  const Updateitem = ()=>{
          axios.put(`http://localhost:8000/updatequestion/${params.id}`,{question,option1,option2,option3,option4,answer})
          .then((result)=>{
          
            console.log(result)
            Setmessage("Document updated sucessfully!")
            
          })
          .catch((error)=>{
            console.log(error)
          })
   
    
  }
  setTimeout(()=>{
    Setmessage("")
  },4000)
 


  return (
    <>
    <h3>Questions update page:</h3>
    Question:<input type="text" placeholder='Enter Question' value={question} onChange={(e)=>Setquestion(e.target.value)}/><br></br>
   option1: <input type="text" placeholder='Enter 1st option' value={option1} onChange={(e)=>Setoption1(e.target.value)}/> <br></br>
   option2: <input type="text" placeholder='Enter 2nd option'value={option2} onChange={(e)=>Setoption2(e.target.value)} /><br></br>
   option3:<input type="text" placeholder='Enter 3rd option'value={option3} onChange={(e)=>Setoption3(e.target.value)}/><br></br>
   option4: <input type="text" placeholder='Enter 4th option'value={option4} onChange={(e)=>Setoption4(e.target.value)}/><br></br>

    <select name="answer" value={answer} onChange={(e)=>Setanswer(e.target.value)}>
        <option value="select">select</option>
        <option value="option1">option1</option>
        <option value="option2">option2</option>
        <option value="option3">option3</option>
        <option value="option4">option4</option>
    </select>

    <button onClick={Updateitem}>Update</button>
    <hr></hr>
    <h2>{message}</h2>


    </>
  )
}

export default Update