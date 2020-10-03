import React from "react"
import photo from "./../../static/images/isramv.jpg"

export default function Home() {
  return (
    <>
      <head>
        <div>
          <div></div>
        </div>
      </head>
      <body>
        <div className="bg-green-100 py-4">
          <div className="container mx-auto md:flex">
            <div className="image-container">
              <img
                className="rounded-lg w-32 mr-4 shadow-lg"
                src={photo}
                alt="author photo"
              />
            </div>
            <div>
              <h1 className="text-3xl font-mono text-gray-800">Hi I am Israel Morales,</h1>
              <h2 className="text-2xl font-mono text-gray-800">Sr. Front End Developer</h2>
            </div>
          </div>
        </div>
        <div>
          <div className="container mx-auto">
            <h3 className='mt-2'>About me:</h3>
            <div className="text-lg py-4">
              <p>I am a JavaScript, Laravel and Drupal developer, I have been making websites since 2010, I have worked in Brazil, United States and I am currently living and working remotelly from Mexico.</p>
              <p>I am always looking for the next challenge and learn new technical stuff, I have listed my previous posts here, and the slides from my prevoius talks here.</p>
              <p>I am also the founder of <a href="https://arquitect.io" target="_blank">arquitect.io</a> which is close to launch in the beggining of 2021.</p>
            </div>
          </div>
        </div>
        <div className='container mx-auto'>
          <h3>Programing languages:</h3>
          <ul>
            <li>JavaScript</li>
            <li>PHP</li>
          </ul>
        </div>
        <div className='container mx-auto'>
          <h3>Frameworks and libraries:</h3>
          <ul>
            <li>Laravel</li>
            <li>Drupal</li>
            <li>Vue.js</li>
            <li>React</li>
            <li>GatsbyJS</li>
          </ul>
        </div>
        <div className='container mx-auto'>
          <h3>Other:</h3>
          <ul>
            <li>CSS</li>
            <li>SASS</li>
            <li>HTML</li>
          </ul>
        </div>
        <div className='container mx-auto'>
          <h3>Experience:</h3>
        </div>
      </body>
    </>
  )
}
