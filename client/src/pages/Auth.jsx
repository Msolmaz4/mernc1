import React, { useState } from 'react'

const Auth = () => {

const [signUp,setSignUp] = useState(true)
const [authData,setAuthData] = useState({username:'',email:'',password:''})

const onChangeFuc = (e)=>{
    setAuthData({...authData,[e.target.name] : e.target.value})

}
console.log('autDta',authData)

  return (
    <div className='w-full h-screen bg-gray-100 flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 z-50'>
        <div className='w-1/3 bg-white p-3 mb-5'>
            <h1 className='text-2xl text-indigo-600 font-bold text-center'>{signUp ? 'register' : 'login'}</h1>
            <div className='flex flex-col space-y-5'>
             { signUp && <input value={authData.username} name='username' onChange={onChangeFuc} type="text" placeholder='Username' className='input-style' />}
                <input value={authData.email} name='email' onChange={onChangeFuc} type="email" placeholder='email' className='input-style' />
                <input value={authData.password} name='password' onChange={onChangeFuc} type="password" placeholder='password' className='input-style' />
            </div>
            <div className='text-red-500 text-xs cursor-pointer mb-4'>
                {
                    signUp
                     ? <span onClick={()=>setSignUp(false)}>Daha once giris yaptiniz mi?</span> 
                     : <span onClick={()=>setSignUp(true)}>Kayit olmak icin tiklayin</span>
                }
                
               
            </div>
            <div className='cursor-pointer hover:bg-indigo-900 w-full p-2 text-center bg-indigo-600 text-white rounded-md'>{signUp ? 'KAYIT OL ':'girisYap'} </div>
      
        </div>
        
        </div>
  )
}

export default Auth