import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/faizal67')
    //     .then((res)=> res.json())
    //     .then((data)=> setData(data))
    // }, [])
    const data = useLoaderData();
  return (
    <div className='text-centre m-4 bg-gray-600 text-white p-4 text-3xl '>
      Github-Followers: {data.followers}
      <img src={data.avatar_url} alt='github-picture' width={200} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/faizal67')
    return response.json();
}
