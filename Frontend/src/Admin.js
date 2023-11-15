import React, { useRef, useState } from 'react'
import './Add.css'
import axios from 'axios';


function Admin() {
  const refElement = useRef("");
    const [question,Setquestion] = useState("");
    const [option1,Setoption1] = useState("");
    const [option2,Setoption2] = useState("");
    const [option3,Setoption3] = useState("");
    const [option4,Setoption4] = useState("");
    const [answer,Setanswer] = useState("");
    const [message,Setmessage] = useState("");
    // console.log(refElement)

    function handelInput(){
      refElement.current.style.color= "red"
      
    }
    

    function reset(){
      Setquestion("")
      Setoption1("")
      Setoption2("")
      Setoption3("")
      Setoption4("")
      Setanswer("")
      refElement.current.focus();
    }

   

  const Add =  ()=>{
      const mydata = {
        "question":question,
        "option1":option1,
        "option2":option2,
        "option3":option3,
        "option4":option4,
        "answer":answer
      }
      axios.post("http://localhost:8000/admin",mydata)
      .then((response)=>{
        if(response.data._id != null){
              Setmessage("Question added sucessfully")
            }
          })
          .catch(()=>{
            Setmessage("faild")
          })
  }
  setTimeout(()=>{
    Setmessage("")
  },3000)
  
    
  return (
    <>
    <h3>Add Questions</h3>
    <hr></hr>
    Question :<input ref={refElement} type="text" id="question" value={question} placeholder='enter question' onChange={(e)=>Setquestion(e.target.value)}></input><br></br>
    Option 1:<input type="text" id="option1" value={option1} placeholder='enter 1st option' onChange={(e)=>Setoption1(e.target.value)}></input><br></br>
    Option 2:<input type="text" id="option2" value={option2} placeholder='enter 2nd option' onChange={(e)=>Setoption2(e.target.value)}></input><br></br>
    Option 3:<input type="text" id="option3" value={option3} placeholder='enter 3rd option' onChange={(e)=>Setoption3(e.target.value)}></input><br></br>
    Option 4:<input type="text" id="option4" value={option4} placeholder='enter 4th option' onChange={(e)=>Setoption4(e.target.value)}></input><br></br>

    

        <select name="answer" id="answer" value={answer} onChange={(e)=>Setanswer(e.target.value)}>
        <option value="select">select</option>   
        <option value="option1">option1</option>
        <option value="option2">option2</option>
        <option value="option3">option3</option>
        <option value="option4">option4</option>
        </select><br></br>
        <hr></hr>
        <button className="add" onClick={Add}>Add</button>
        <button className="reset" onClick={reset}>Reset</button>
        <button className="handel" onClick={handelInput}>handel Input</button>
        <hr></hr>
        <h2>{message}</h2>
        
    </>
  )
  }


export default Admin