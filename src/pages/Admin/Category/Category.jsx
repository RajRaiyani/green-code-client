import React from "react";
import { Link } from "react-router-dom";
import { IoAdd } from "react-icons/io5";

function Category(){
    return (
        <div className="h-full flex flex-col">
            <div className="w-1/4 mx-auto">
                <div className="flex items-center w-full justify-between px-3">
                    <p className="w-full text-center text-lg">Categories</p>
                    <IoAdd className="text-3xl inline-block hover:scale-110" />
                </div>
                <form className="w-full flex items-center">
                    <input className="gc-border-green w-full text-xl px-1" type="text" placeholder="Category" />
                    <button className="gc-bg-green text-white rounded-lg py-1 px-2 ms-2">Add</button>
                </form>
                <div>


                </div>
            </div>
        </div>
    );
}

export default Category;