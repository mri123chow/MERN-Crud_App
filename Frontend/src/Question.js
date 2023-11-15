import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Question.css";

function Question() {
  const [question, Setquestion] = useState([]);
  const [message,Setmessage] = useState("")

  // useEffect(() => {
  //   axios.get("http://localhost:8000/getquestion").then((res) => {
  //     // console.log(res)
  //     Setquestion(res.data);
  //   });
  // }, []);

  useEffect(() => {
    getQuestion();
  }, []);

  const getQuestion = async () => {
    let result = await fetch("http://localhost:8000/getquestion");
    result = await result.json();
    Setquestion(result);
  };

  const DeleteProduct = (id) => {
    alert("are you sure to delete this item?");

    axios
      .delete(`http://localhost:8000/delete/${id}`)
      .then((response) => {
        getQuestion();
        Setmessage("document has been sucessfully deleted!")

      })
      .catch((error) => {
        console.log(error);
      });
  };
  setTimeout(() => {
    Setmessage("")
    
  },4000);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th className="question">Question</th>
            <th>option1</th>
            <th>option2</th>
            <th>option3</th>
            <th>option4</th>
            <th className="ans">Answer</th>
            <div className="action"><th>Action</th></div>
          </tr>
        </thead>
        <tbody>
          {question.map((ele) => {
            return (
              <tr>
                <td className="ques">{ele.question}</td>
                

                <td>{ele.option1}</td>
                <td>{ele.option2}</td>
                <td>{ele.option3}</td>
                <td>{ele.option4}</td>
                <td className="answer">{ele.answer}</td>

                <th>
                  <button className="update">
                    <Link to={"/update/" + ele._id}>Update</Link>
                  </button>
                </th>
                <th>
                  <button className="deletebtn" onClick={() => DeleteProduct(ele._id)}>Delete</button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h5>{message}</h5>
    </>
  );
}

export default Question;
