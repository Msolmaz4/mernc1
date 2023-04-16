//bu localstroge kaydettigim tokeni dondurmeyi yaptik
import {useState,useEffect} from 'react'

const UserToken = () => {

    const [token,setToken] = useState('')

    useEffect(()=>{
          setToken(JSON.parse(localStorage.getItem('auth')))
    },[])
    


  return [token]
}

export default UserToken