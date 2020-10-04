import React from "react"

export default function List(props) {
  const listItems = props.data.collection.map((item, index) => {
    let keyString = `${props.data.title.replace(/ /gi, '-')}-${index}`
    console.log(keyString)
    return <li key={keyString}>{item}</li>
  })

  return (
    <>
      <div className="container mx-auto">
        <h3>{props.data.title}:</h3>
        <ul>{listItems}</ul>
      </div>
    </>
  )
}
