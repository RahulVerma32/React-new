import React from 'react'
import { useLoaderData } from "react-router-dom"

export default function GithubInfoLoader() {
    const data = useLoaderData();
    
    return (
        <div className='text-center m-4 bg-amber-600 text-white p-4 text-3xl'>
        Github Followers: {data.followers}
        <div className="flex justify-center mt-2">
          <img src={data.avatar_url} alt="github_profile" width={300}/>
        </div>
      </div>
    )
  }


