import React from 'react'
import { motion } from 'framer-motion'

const Video = () => {
    return (
        <motion.div className='bg-accent'
            initial={{ opacity: 0, x: 100, scale: .5 }}
            transition={{ duration: .8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
        >
            <div className='w-11/12 mx-auto py-16 '>
                <h1 className='text-center font-bold text-4xl text-primary mb-16'>See what makes <br /><span className='text-white'> Hospitology different</span></h1>
                <div>
                    <iframe className="w-full aspect-video rounded-2xl" height="450" src="https://www.youtube.com/embed/UkkPQYrou4Y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div >
            </div >
        </motion.div >
    )
}

export default Video
