import React from "react"

export default function List(props) {
  const listItems = props.data.collection.map(item => {
    return <li>{item}</li>
  })

  return (
    <>
      <div className="container mx-auto mt-2">
        <h3>{props.data.title}:</h3>
        <ul>{listItems}</ul>
      </div>
    </>
  )
}
