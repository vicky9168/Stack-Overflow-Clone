import React from "react";
import "./HomeMainbar.css";
import { useLocation } from "react-router-dom";
import QuestionList from "./QuestionList";
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";


const HomeMainbar = () => {
  const questionList = useSelector((state)=>(state.questionsReducer))
  const user =12;
    const navigate=useNavigate()
    const checkAuth=()=>{
      if(user === null){
        alert("Login or Signup to ask a questions")
        navigate('/Auth')
      } else {
        navigate('/AskQuestion')
      }
    }
  const location = useLocation();
  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={checkAuth} className="ask-btn"> Ask Questions</button>
      </div>
      <div>
        {questionList.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionList.data.length} questions</p>
            <QuestionList questionList={questionList.data} />
          </>
        )}
      </div>
    </div>
  );
}

export default HomeMainbar;
