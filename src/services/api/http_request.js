import axios from "axios";

const makeHTTPCall = (method,url,headers,data=null)=>new Promise((resolve,reject)=>{
    const options = {
        method,
        url,
        headers,
        responseType : 'json',
        withCredentials : true
    }
    if(method === 'get') options.params = data;
    else options.data = data;

    axios(options).then((response)=>{resolve(response.data)})
    .catch((error)=>{
        if(error.message === 'Network Error')return;
        if(!error.response) return;
        if(error.response.status === 401) return window.location.href = '/login';
        return reject(error.response.data)
    })
})

export const GET = (url,headers={},params) => makeHTTPCall('get',url,headers,params);

export const POST = (url,headers={},data=null) => makeHTTPCall('post',url,headers,data);

export const PUT = (url,headers={},data=null) => makeHTTPCall('put',url,headers,data);

export const DELETE = (url,headers={},data=null) => makeHTTPCall('delete',url,headers,data);


export default {
    GET,POST,PUT,DELETE
}