import React from 'react'
import whatsapp from '../../assets/whatsapp.png'

const WhatsApp = () => {
    return (
        <div className=' '>
            <a href="https://wa.me/01300778565" target='_blank' rel="noreferrer" className='bg-green-500 fixed bottom-8 right-8 px-3 py-2 flex gap-2 items-center text-white rounded-full z-[1000] '>
                <img src={whatsapp} alt="" className='h-8' />
                Message us
            </a>
        </div>
    )
}

export default WhatsApp
