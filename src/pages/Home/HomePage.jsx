/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { getQuestions } from "../../services/api";
import { useDebounce } from "../../hooks";
import SelectMenu from "../../lib/Select";
import { useGetCategories } from "../../hooks/cache";


function HomePage() {
  const [questions,setQuestions] = useState([]);
  const [searchText,setSearchText] = useState('');
  const [categories] = useGetCategories();
  const debounceSearchText = useDebounce(searchText,500);

  
  useEffect(()=>{
    getQuestions(debounceSearchText).then(res=>{
      setQuestions(res)
      console.log(res);
    })
  },[debounceSearchText])

  function QuestionList() {
    return questions.map((ques,index) => {
      return (
        <div className="border p-1 flex items-center " key={index}>
          <span className="font-bold me-2">{index}</span>
          <p>{ques.title}</p>
        </div>
      );
    })
  }

  return (
    <div>

      <div className="w-2/3 px-3">
        <div className="w-full flex justify-between my-2">
          <div className="flex">
            <SelectMenu className="min-w-[130px] me-2" placeholder="Level" isClearable isGreen options={[{ value: 'easy', label: 'Easy' },{ value: 'medium', label: 'Medium' },{ value: 'hard', label: 'Hard' }]} />
            <SelectMenu className="min-w-[130px] max-w-[400px]" placeholder="Categories" isMulti isClearable isGreen options={categories.map(v=>({value : v.name,label:v.name}))} />
          </div>
          <input className="text-xl px-1 gc-border-green" type="text" placeholder="Search" onChange={(e) => setSearchText(e.target.value)} />
        </div>
        <QuestionList />
      </div>
    </div>
  );
}

export default HomePage;