import React from "react"
import photo from "../../static/images/isramv.jpg"

export default function Welcome(props) {
  return (
    <div className="bg-green-100 shadow-lg py-2 md:py-4">
      <div className="container mx-auto md:flex md:items-center">
        <div>
          <img
            className="mx-auto rounded-md w-24 md:w-32 shadow-lg md:mr-4"
            src={photo}
            alt=''
          />
        </div>
        <div>
          <h1 className="text-xl text-center md:text-left md:text-3xl font-mono text-gray-800">
            <a href="/">Hi I am Israel Morales,</a>
          </h1>
          <h2 className="text-lg text-center md:text-left md:text-2xl font-mono text-gray-800">
            Sr. Front End Developer
          </h2>
        </div>
      </div>
    </div>
  )
}
