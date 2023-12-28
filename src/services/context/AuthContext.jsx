import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";

export const AuthContext = React.createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user,setUser] = useState();

    useEffect(()=>{
        LogInUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    function LogInUser(){
        const User = Cookies.get("user");
        if(User){
            setUser(JSON.parse(User)); 
            setIsLoggedIn(true);
        }  
    }

    function LogOutUser(){
        localStorage.clear();
        setUser();
        setIsLoggedIn(false);
    }

    function GetUser(){
        const User = Cookies.get("user");
        if(User) return JSON.parse(User)
    }
  

    const value = {
        user,isLoggedIn,LogInUser,LogOutUser,
        GetUser
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};