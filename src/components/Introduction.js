import React from "react"
import photo from "../../static/images/isramv.jpg"

export default function Welcome(props) {
  return (
    <div className="bg-green-100 py-4 px-4 md:px-0 shadow-lg">
      <div className="container mx-auto md:flex md:items-center">
        <div className="image-container">
          <img
            className="rounded-lg w-32 mr-4 shadow-lg"
            src={photo}
            alt=''
          />
        </div>
        <div>
          <h1 className="text-3xl font-mono text-gray-800">
            <a href="/">Hi I am Israel Morales,</a>
          </h1>
          <h2 className="text-2xl font-mono text-gray-800">
            Sr. Front End Developer
          </h2>
        </div>
      </div>
    </div>
  )
}