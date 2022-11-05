import React from 'react'
import benefit from '../../assets/radiologist_17.jpg'
import { FaCheckCircle } from 'react-icons/fa';

const Benefits = () => {

    return (
        <div className="hero py-10 w-11/12 mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={benefit} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-4xl font-bold text-secondary">Membership benefits <br /> <span className='text-primary'>You will enjoy</span></h1>
                    <div className='grid lg:grid-cols-2 gap-5 mt-10'>
                        <div>
                            <div className='flex items-start  gap-3 mb-5'>
                                <FaCheckCircle className='text-3xl text-secondary' />
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, distinctio.</p>
                            </div>
                            <div className='flex items-start  gap-3 mb-5'>
                                <FaCheckCircle className='text-3xl text-secondary' />
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, distinctio.</p>
                            </div>
                            <div className='flex items-start  gap-3 mb-5'>
                                <FaCheckCircle className='text-3xl text-secondary' />
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, distinctio.</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-start  gap-3 mb-5'>
                                <FaCheckCircle className='text-3xl text-secondary' />
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, distinctio.</p>
                            </div>
                            <div className='flex items-start  gap-3 mb-5'>
                                <FaCheckCircle className='text-3xl text-secondary' />
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, distinctio.</p>
                            </div>
                            <div className='flex items-start  gap-3 mb-5'>
                                <FaCheckCircle className='text-3xl text-secondary' />
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, distinctio.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits
