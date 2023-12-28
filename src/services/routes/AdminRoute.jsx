import React, { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function AdminRoute({children}){
    const {GetUser} = useAuthContext();
    const Navigate = useNavigate();
    useEffect(()=>{
        const user = GetUser();
        if(!user || user.role !== 'admin') Navigate('/login')
    },[Navigate, GetUser])

    return <>{children}</>
}

AdminRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AdminRoute;