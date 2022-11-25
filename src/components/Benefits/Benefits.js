import React from 'react'
import benefit from '../../assets/onlineconsulting.jpg'
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from "framer-motion"

const Benefits = () => {

    return (
        <motion.div className="hero py-10 w-11/12 mx-auto"
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 1 }}
        >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={benefit} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-4xl font-bold text-secondary">Membership benefits <br /> <span className='text-primary'>You will enjoy</span></h1>
                    <div className='grid lg:grid-cols-2 gap-5 mt-10 text-black'>
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
        </motion.div>
    )
}

export default Benefits
