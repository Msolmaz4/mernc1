import axios from 'axios'
import { toast } from 'react-toastify'


export const getPostsAction =()=> async (dispatch)=>{
    try {
        const {data} =await axios.get('http://localhost:5000/getPosts')
        dispatch({type:'GET_POSTS',payload:data})
        window.location = '/'
    } catch (error) {
        toast(error.response.data.msg, {
            position: "top-right",
            autoClose: 5000,
            
            });
        
    }
}

export const createPostsAction =(postData)=> async (dispatch)=>{
    try {
        const {data} =await axios.post('http://localhost:5000/createPost',postData)
        dispatch({type:'CREATE_POST',payload:data})
        window.location = '/'
    } catch (error) {
        toast(error.response.data.msg, {
            position: "top-right",
            autoClose: 5000,
            
            });
        
    }
}


export const updatePostsAction =(id,postData)=> async (dispatch)=>{
    try {
        const {data} =await axios.patch(`http://localhost:5000/register/updatePost/${id}`,postData)
        dispatch({type:'UPDATE_POSTS',payload:data})
        window.location = '/'
    } catch (error) {
        toast(error.response.data.msg, {
            position: "top-right",
            autoClose: 5000,
            
            });
        
    }
}


export const deletePostsAction =(id)=> async (dispatch)=>{
    try {
        await axios.delete(`http://localhost:5000/register/deletePost/${id}`)
        dispatch({type:'DELETE_POST',payload:id})
        window.location = '/'
    } catch (error) {
        toast(error.response.data.msg, {
            position: "top-right",
            autoClose: 5000,
            
            });
        
    }
}

