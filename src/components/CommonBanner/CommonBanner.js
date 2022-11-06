import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CommonBanner = () => {
    return (
        <div className='h-60 bg-accent flex flex-col items-center justify-center'>
            <h1 className='text-3xl font-bold'>Doctors Details</h1>
            <div className='flex items-center gap-3 py-3'>
                <Link to='/'>Home</Link>
                <FaChevronRight />
                <span>View profile</span>
            </div>
        </div>
    )
}

export default CommonBanner