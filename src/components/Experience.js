import React from "react"

export default function Experience(props) {
    return (
        <div className='bg-gray-200 py-4'>
            <div className="container mx-auto">
                <h3 className='text-3xl'>{props.data.title}:</h3>
                {props.data.collection.map(item => {
                    return(
                        <div className='my-4'>
                            <h4 className='text-2xl text-gray-800 font-mono'>{item.company}:</h4>
                            <div className="job-title font-serif">{item.jobTitle}</div>
                            <div className="dates text-sm">{item.dates}</div>
                            <div className='text-sm'>{item.description}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}