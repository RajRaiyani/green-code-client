import React from "react";
import { useParams } from "react-router-dom";

function QuestionPage(){
  const params = useParams();
    return (
        <div className="h-full flex flex-col">
            <div className="p-1 w-full flex justify-between">
                <div>{params.id}</div>
            </div>
            <h1>Question</h1>
        </div>
    );
}


export default QuestionPage;