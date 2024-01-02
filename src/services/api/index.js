import {GET,POST,PUT,DELETE} from './http_request';
import { serverDetails } from '../../config';


// ===================== User =====================

export const registerUser = (data) =>{
    const url = `${serverDetails.serverProxyURL}/api/v1/user/register`;
    return POST(url,{},data);
}

export const loginUser = (data) =>{
    const url = `${serverDetails.serverProxyURL}/api/v1/user/login`;
    return POST(url,{},data,true);
}



// ===================== Questions =====================
export const getQuestions = (search='',limit=25,offset=0) =>{
    const url = `${serverDetails.serverProxyURL}/api/v1/question?search=${encodeURIComponent(search)}&limit=${limit}&offset=${offset}`;
    return GET(url,{});
}

export const addQuestion = (data) =>{
    const url = `${serverDetails.serverProxyURL}/api/v1/question`;
    return POST(url,{},data);
}

// ===================== Categories =====================
export const addCategory = (data) =>{
    const url = `${serverDetails.serverProxyURL}/api/v1/category`;
    return POST(url,{},data);
}

export const updateCategory = (id,data) =>{
    const url = `${serverDetails.serverProxyURL}/api/v1/category/${id}`;
    return PUT(url,{},data);
}

export const deleteCategory = (id) =>{
    const url = `${serverDetails.serverProxyURL}/api/v1/category/${id}`;
    return DELETE(url,{});
}

export const getCategories = () =>{
    const url = `${serverDetails.serverProxyURL}/api/v1/category`;
    return GET(url,{});
}


// ===================== Languages =====================

export const addLanguage = (data) =>{
    const url = `${serverDetails.serverProxyURL}/api/v1/language`;
    return POST(url,{},data);
}

export const getLanguages = () =>{
    const url = `${serverDetails.serverProxyURL}/api/v1/language`;
    return GET(url,{});
}

export const updateLanguage = (id,data) =>{
    const url = `${serverDetails.serverProxyURL}/api/v1/language/${id}`;
    return PUT(url,{},data);
}

export const deleteLanguage = (id) =>{
    const url = `${serverDetails.serverProxyURL}/api/v1/language/${id}`;
    return DELETE(url,{});
}

