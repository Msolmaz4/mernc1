import React, { useState } from 'react'

const Modal = () => {

  const [postData,setPostData] = useState({user:'',title:'',description:''})

  const onchangeFunc = (e)=>{
     
    setPostData({...postData,[e.target.name]:e.target.value})
  }

  return (
    <div className='w-full h-screen bg-opacity-50 bg-black fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center'>
        <div className='bg-white w-1/3 p-2 rounded-md'>
            <h1 className='font-bold text-2xl '>POST PAYLAS</h1>
            <div className='my-4 flex flex-col space-y-3'>
                <input value={postData.user} name='user' type="text" placeholder='user'  className='input-style' onChange={onchangeFunc}/>
                <input  value={postData.title} name='title'  type="text" placeholder='Title' className='input-style'onChange={onchangeFunc} />
                <input  value={postData.description} name='desc'  type="text" placeholder='Description' className='input-style' onChange={onchangeFunc}/>
            </div>
            <div className='w-full p-2 text-center bg-indigo-600 text-white cursor-pointer hover:bg-indigo-800'>PAYLAS</div>
            

        </div>
    </div>
  )
}

export default Modal