import React from 'react'
import Introduction from '../components/Introduction'
import Links from './../components/Links'

export default function Home() {
  return (
    <div className='bg-gray-100'>
      <Introduction />
      <div className='container mx-auto p-2 sm:px-0'>
        <Links />
      </div>
      <div className="container mx-auto">
        <h2 className="text-3xl font-mono text-gray-800 my-2 px-2 sm:px-0">
          404
        </h2>
      </div>
    </div>
  )
}
