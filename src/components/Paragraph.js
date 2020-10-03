import React from "react"

export default function Paragraph(props) {

console.log(props.data.text)

  return (
    <>
      <div className="container mx-auto">
        <h3 className="mt-2">{props.data.title}:</h3>
        <div className="text-lg py-4" dangerouslySetInnerHTML={{__html: props.data.text}}></div>
      </div>
    </>
  )
}
