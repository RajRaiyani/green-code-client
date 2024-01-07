/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { getQuestions } from "../../services/api";
import { useDebounce,useGetQuestions } from "../../hooks";
import SelectMenu from "../../lib/Select";
import { useGetCategories } from "../../hooks/cache";


function HomePage() {
  const [searchText,setSearchText] = useState('');
  const [categories] = useGetCategories();
  const debounceSearchText = useDebounce(searchText,500);
  const [searchCategories,setSearchCategories] = useState([]);
  const [level,setLevel] = useState('');
  const [offset,setOffset] = useState(0);
  const [limit,setLimit] = useState(5);

  const [questions] = useGetQuestions(debounceSearchText,level,searchCategories,offset,limit);



  function QuestionList() {
    return questions.map((ques,index) => {
      return (
        <div className="border p-1  items-center " key={index}>
          <span className="font-bold me-2">{offset+index}</span>
          <h4>{ques.title}</h4><br />
          <p>{ques.level}</p><br />
          <p>{ques.categories.map(v=>v.name).join(',')}</p>
        </div>
      );
    })
  }

  return (
    <div>
      <div className="w-2/3 px-3">
        <div className="w-full flex justify-between my-2">
          <div className="flex">
            <SelectMenu onChange={(data)=>setLevel(data?.value)} className="min-w-[130px] me-2" placeholder="Level" isClearable isGreen options={[{ value: 'easy', label: 'Easy' },{ value: 'medium', label: 'Medium' },{ value: 'hard', label: 'Hard' }]} />
            <SelectMenu onChange={(data)=>setSearchCategories(data.map(v=>v.id))} className="min-w-[130px] max-w-[400px]" placeholder="Categories" isMulti isClearable isGreen options={categories.map(v=>({value : v.name,label:v.name,id:v._id}))} />
          </div>
          <input className="text-xl px-1 gc-border-green" type="text" placeholder="Search" onChange={(e) => setSearchText(e.target.value)} />
        </div>
        <QuestionList />
        <button onClick={()=>setOffset(offset-limit)}>back</button><br />
        <button onClick={()=>setOffset(offset+limit)}>next</button>
      </div>
    </div>
  );
}

export default HomePage;