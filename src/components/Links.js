import React from 'react'
import './../../static/icons/brands.svg'

export default function Links(props) {
    return (
        <div className='bg-gray-100'>
            <div className='container mx-auto py-4'>
                <ul>
                    {props.data.collection.map((item, index) => {
                        return (
                            <li key={`${props.data.title}-${index}`}>
                                <a href={item.url}>
                                    {item.description}/{item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
