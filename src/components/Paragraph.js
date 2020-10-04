import React from "react"

export default function Paragraph(props) {
  return (
    <div className='py-4 bg-gray-200'>
      <div className="container mx-auto mb-4 px-4 md:px-0">
        <h3 className="mt-2">{props.data.title}:</h3>
        <div className="text-lg text-gray-700" dangerouslySetInnerHTML={{__html: props.data.text}}></div>
      </div>
    </div>
  )
}
