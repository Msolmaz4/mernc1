import axios from 'axios'
import { toast } from 'react-toastify'

//kayit ola tiklayinca otomatikmen authData butaya grelecek
export const registerAction =(authData)=> async (dispatch)=>{
    try {
        const {data} =await axios.post('http://localhost:5000/register',authData)
        dispatch({type:'REGISTER',payload:data})
        window.location = '/'
    } catch (error) {
        toast(error.response.data.msg, {
            position: "top-right",
            autoClose: 5000,
            
            });
        
    }
}

export const loginrAction =()=> async (dispatch)=>{
    try {
        
    } catch (error) {
        toast(error.response.data.msg, {
            position: "top-right",
            autoClose: 5000,
            
            });
    }
}