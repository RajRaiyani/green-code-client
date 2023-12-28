import React, { useState } from "react";
import {set, useForm} from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LogoWithName } from "../../assets/images";

import { loginUser } from "../../services/api";
import {useAuthContext} from "../../services/context/AuthContext";

const schema = yup.object({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required")
})

function LogInUser(){
    const Navigate = useNavigate();
    const {LogInUser} = useAuthContext();
    const {register, handleSubmit,formState: { errors }} = useForm({resolver: yupResolver(schema)});
    const [errorMessages, setErrorMessages] = useState('');

    function onSubmit(data){
        loginUser(data).then((res)=>{
            LogInUser();
            Navigate("/");
        }).catch((data)=>{
            if(data.code === 'invalid_data')setErrorMessages('Invalid username or password')
        })
    }

    return(
        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 border rounded-xl px-5 py-3 max-w-[350px] w-[90vw] gc-shadow-9">
            <img src={LogoWithName} alt='logo' className='w-1/2 mx-auto' />
            <h1 className="text-center text-lg mt-2">Log In</h1>
            <p className="text-center text-sm text-red-500">{errorMessages}</p>
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                <label className="text-sm text-gray-500">Username or Email</label>
                <input type="text" placeholder="username or email" {...register('username')}
                className="border rounded-lg p-1" />
                <p className="text-xs text-red-500">{errors.username?.message}</p>
                <label className="text-sm text-gray-500">Password</label>
                <input type="text" placeholder="Password" {...register('password')}
                className="border rounded-lg p-1" />
                <p className="text-xs text-red-500">{errors.password?.message}</p>
                <input type="submit" value="Log In" className="gc-bg-green text-white rounded-lg p-1 mt-2 cursor-pointer" />
            </form>
            <p className="text-center font-light text-sm mt-2">Don&apos;t have an account ? <Link to="/register" className="gc-text-green font-bold">Register</Link></p>
        </div>
    )
}

export default LogInUser;