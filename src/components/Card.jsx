import React from 'react'

const Card = ({ title, src }) => {
    return (
        <div className='bg-slate-200 flex items-center justify-center flex-col p-4'>
            <img src={src} className='w-full' alt={title} />

            <div>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default Card
