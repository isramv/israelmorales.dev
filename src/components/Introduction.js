import React from "react"
import photo from "../../static/images/isramv.jpg"
import twitterLogo from "../../static/icons/twitter.svg"
import githubLogo from "../../static/icons/github.svg"
import linkedinLogo from "../../static/icons/linkedin.svg"

export default function Welcome(props) {
  return (
    <div className="bg-gray-300 py-2 md:py-4">
      <div className="container mx-auto md:flex md:items-center">
        <div>
          <img
            className="mx-auto rounded-md w-24 shadow-lg md:mr-4"
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
          <ul className='flex mt-2 justify-center md:justify-start items-center'>
            <li className='mr-2'>
              <a href="https://github.com/isramv"><img className='w-5' src={githubLogo} alt='twitter logo'/></a>
            </li>
            <li className='mr-2'>
              <a href="https://www.linkedin.com/in/isramv/"><img className='w-5' src={linkedinLogo} alt='linkedin logo'/></a>
            </li>
            <li>
              <a href="https://twitter.com/isramv"><img className='w-5' src={twitterLogo} alt='twitter logo'/></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
