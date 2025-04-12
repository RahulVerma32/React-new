import { useEffect, useState } from "react"
import React from 'react'


function Github() {
     const  [data,setData] = useState([])
     useEffect(() => {
       fetch('https://api.github.com/users/RahulVerma32')
       .then(response => response.json())
       .then(data => {
         setData(data)
       })
     }, [])

    return (
        <div className='text-center m-4 bg-amber-600 text-white p-4 text-3xl'>
          Github Followers: {data.followers}
          <div className="flex justify-center mt-2">
            <img src={data.avatar_url} alt="github_profile" width={300}/>
          </div>
        </div>
      )
}

export default Github
