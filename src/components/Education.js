import React from "react"

export default function Experience(props) {
    return (
        <div className='bg-gray-100 py-4 px-4 md:px-0'>
            <div className="container mx-auto">
                <h3 className='text-3xl'>{props.data.title}:</h3>
                {props.data.collection.map((item, index) => {
                    const keyString = `${props.data.title.replace(/ /gi, "-")}-${index}`
                    return(
                        <div key={keyString} className='my-4'>
                            <h4 className='text-2xl text-gray-800 font-mono'>{item.title}:</h4>
                            <div className="job-title font-serif">{item.degree}</div>
                            <div className="dates text-sm">{item.dates}</div>
                            {item.description && <div className='text-sm'>{item.description}</div>}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
