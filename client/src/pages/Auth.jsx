import React from 'react'

const Auth = () => {
  return (
    <div className='w-full h-screen bg-gray-100 flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 z-50'>
        <div className='w-1/3 bg-white p-3'>
            <h1>POST PAYLAS</h1>
            <div className='flex flex-col space-y-5'>
                <input type="text" placeholder='Username' className='border p-2 rounded-md outline-none' />
                <input type="email" placeholder='email' className='' />
                <input type="password" placeholder='password' className='' />
            </div>
            <div className='cursor-pointer hover:bg-indigo-900 w-full p-2 text-center bg-indigo-600 text-white rounded-md'>KAYIT OL </div>
      
        </div>
        
        </div>
  )
}

export default Auth