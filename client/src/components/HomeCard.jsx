import {RiDeleteBin6Line} from 'react-icons/ri'
import {GrUpdate} from 'react-icons/gr'
import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { deletePostsAction } from '../redux/actions/post'

const HomeCard = ({post}) => {

  const dispatch = useDispatch()
  const {modal} = useSelector(state=>state.modal)
 console.log(modal)
 const updatePost=(id)=>{
  dispatch({type:'MODAL',payload:{open:true,updateId:id}})
   
 }

 const deletePost=(id)=>{
    dispatch(deletePostsAction(id))
    window.location.reload()
 }

  return (
    <div className='relative w-1/4 border p-3 rounded-md bg-gray-50'>
        <div className='font-blod text-xl'>{post?.title}</div>
        <div className='text-gray-700 text-sm'>{post?.description}</div>
        <div className='flex items-center justify-center my-4'>
            <span className='text-xs text-gray-500'>{post?.user} </span>
            <span className='text-xs text-gray-500'>{(post?.date)?.substring(0,10)} </span>
        </div>
        <div className='absolute -top-3 -right-3 flex items-center space-x-3'>
        <RiDeleteBin6Line size={22} onClick={()=>deletePost(post._id)} className='bg-red-500 rounded-full text-white p-2 cursor-pointer'/>
        <GrUpdate size={22} onClick={()=>updatePost(post._id)}  className='bg-red-500 rounded-full text-white p-2 cursor-pointer'/>
        </div>
        HomeCard</div>
  )
}

export default HomeCard