import React, { useState } from 'react'
import { useContext } from 'react'
import userContext from '../context/userContext'

const Login = () => {
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');

    const {setUser} = useContext(userContext)
   const handleSubmit = (e)=> {
         e.preventDefault()
         setUser({userName,password})
   } 
  return (
    <>
      <h2>Login</h2>
        <input type='text' placeholder='UserName' value={userName} onChange={(e)=> setUserName(e.target.value)}></input>
        <input type='text' placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)}></input>
        <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Login
