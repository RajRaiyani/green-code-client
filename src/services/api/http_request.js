import axios from "axios";

const makeHTTPCall = (method,url,headers,params=null)=>new Promise((resolve,reject)=>{
    axios({
        method,
        url,
        headers,
        data : params,
        responseType : 'json',
        withCredentials : true
    }).then((response)=>{resolve(response.data)})
    .catch((error)=>{
        if(error.message === 'Network Error')return;
        if(!error.response) return;
        if(error.response.status === 401) return window.location.href = '/login';
        return reject(error.response.data)
    })
})

export const GET = (url,headers={}) => makeHTTPCall('get',url,headers);

export const POST = (url,headers={},params=null) => makeHTTPCall('post',url,headers,params);

export const PUT = (url,headers={},params=null) => makeHTTPCall('put',url,headers,params);

export const DELETE = (url,headers={},params=null) => makeHTTPCall('delete',url,headers,params);


export default {
    GET,POST,PUT,DELETE
}