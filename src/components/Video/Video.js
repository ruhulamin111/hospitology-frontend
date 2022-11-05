import React from 'react'

const Video = () => {
    return (
        <div className='bg-accent'>
            <div className='w-11/12 mx-auto py-16 '>
                <h1 className='text-center font-bold text-4xl text-primary mb-16'>See what makes <br /><span className='text-secondary'> Hospitology different</span></h1>
                <div>
                    <iframe className="w-full aspect-video " height="450" src="https://www.youtube.com/embed/UkkPQYrou4Y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div >
            </div >
        </div >
    )
}

export default Video
