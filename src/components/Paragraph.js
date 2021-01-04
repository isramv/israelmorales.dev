import React from "react"

export default function Paragraph(props) {
  return (
    <div className='p-2 md:px-0 bg-gray-200'>
      <div className="container mx-auto">
        <h3 className='text-xl md:text-2xl'>{props.data.title}:</h3>
        <p className="text-md text-gray-700" dangerouslySetInnerHTML={{__html: props.data.text}}></p>
      </div>
    </div>
  )
}
