import React from 'react'
import { useContext } from 'react'
import userContext from '../context/userContext'

const Profile = () => {
    const {user} = useContext(userContext)
    if(user == null) return <div>Please Login</div>
  return <div>welcome {user.userName}</div>
}

export default Profile
