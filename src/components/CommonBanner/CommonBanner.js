import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CommonBanner = ({ name, title }) => {
    return (
        <div className='h-60 bg-accent flex flex-col items-center justify-center text-white'>
            <h1 className='text-3xl font-bold'>{title}</h1>
            <div className='flex items-center gap-3 py-3'>
                <Link to='/'>Home</Link>
                <FaChevronRight />
                <span>{name}</span>
            </div>
        </div>
    )
}

export default CommonBanner