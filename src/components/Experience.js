import React from "react"

export default function Experience(props) {
    return (
        <div className='bg-gray-200 p-2 md:px-0'>
            <div className="container mx-auto">
                <h3 className='text-xl md:text-2xl'>{props.data.title}:</h3>
                {props.data.collection.map((item, index) => {
                    const keyString = `${props.data.title.replace(/ /gi, "-")}-${index}`
                    return(
                        <div key={keyString} className='my-2 md:my-4'>
                            <h4 className='text-xl text-gray-800 font-mono'>{item.company}:</h4>
                            <div className="job-title font-serif">{item.jobTitle}</div>
                            <div className="dates text-sm">{item.dates}</div>
                            <div className='text-sm text-gray-700'>{item.description}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
