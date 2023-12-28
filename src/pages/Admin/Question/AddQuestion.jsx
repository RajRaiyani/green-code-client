import React from "react";

function AddQuestion(){
    return (
        <div className="h-full flex flex-col">
            <h1>Add Question</h1>
            <form className="w-1/2 p-2">
                <div className="w-full flex ">
                    <label className="me-1">Title</label>
                    <input className="w-full" type="text" placeholder="title" />
                </div>
                <div>
                    <label>Question</label>
                    <textarea placeholder="Question"></textarea>
                </div>
                <div>
                    <select name="level">
                        <option>easy</option>
                        <option>medium</option>
                        <option>hard</option>
                    </select>
                </div>
            </form>
        </div>
    );
}

export default AddQuestion;