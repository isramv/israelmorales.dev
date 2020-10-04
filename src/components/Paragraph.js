import React from "react"

export default function Paragraph(props) {

console.log(props.data.text)

  return (
    <>
      <div className="container mx-auto mb-4 px-4 md:px-0">
        <h3 className="mt-2">{props.data.title}:</h3>
        <div className="text-lg" dangerouslySetInnerHTML={{__html: props.data.text}}></div>
      </div>
    </>
  )
}
