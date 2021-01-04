import React from "react"

export default function List(props) {
  const listItems = props.data.collection.map((item, index) => {
    const keyString = `${props.data.title.replace(/ /gi, "-")}-${index}`
    return <li className='text-md' key={keyString}>{item}</li>
  })

  return (
    <>
      <div className="container mx-auto my-2">
        <h3>{props.data.title}:</h3>
        <ul>{listItems}</ul>
      </div>
    </>
  )
}
