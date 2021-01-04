import React from "react"

export default function Experience(props) {
    return (
        <div className='bg-gray-100 p-2 md:px-0'>
            <div className="container mx-auto">
                <h3 className='text-xl md:text-2xl'>{props.data.title}:</h3>
                {props.data.collection.map((item, index) => {
                    const keyString = `${props.data.title.replace(/ /gi, "-")}-${index}`
                    return(
                        <div key={keyString} className='mt-2'>
                            <h4 className='text-lg text-gray-800 font-mono'>{item.title}:</h4>
                            <div className="job-title text-gray-700 font-serif">{item.degree}</div>
                            <div className="dates text-sm">{item.dates}</div>
                            {item.description && <div className='text-sm'>{item.description}</div>}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
