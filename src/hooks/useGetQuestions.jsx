import React, { useEffect } from "react";
import { getQuestions } from "../services/api";


function useGetQuestions(search,level='',categories=[],offset,limit){
    const [questions, setQuestions] = React.useState([]);

    useEffect(()=>{
        console.log('hit question get')
        getQuestions(search,level,categories,offset,limit).then((data)=>{
            setQuestions(data);
        })
    },[search,level,categories,offset,limit])

    return [questions,setQuestions];
}

export default useGetQuestions;
