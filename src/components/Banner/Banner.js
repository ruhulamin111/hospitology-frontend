import React from 'react'
import banner from '../../assets//computer-with-covid19-illustration-screen-standing-desk-empty-office-room-during-global-pandemic-modern-hospital-room-equipped-with-professional-medical-instruments-virus-cell-image.jpg'

const Banner = () => {
    return (
        <div className="hero h-screen object-cover" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-secondary">Find Your Doctor</h1>
                    <p className="mb-5 text-white">To serve the humanity as a whole with this noble vision the Ibn Sina Trust started its journey in June 1992. </p>
                    <div className='mb-5'>
                        <select className="select select-bordered w-full max-w-xs text-black">
                            <option disabled selected>Select branch name</option>
                            <option>Mirpur, Dhaka, Bangladesh</option>
                            <option>Dhanmondi, Dhaka, Bangladesh</option>
                            <option>Gulshan, Dhaka, Bangladesh</option>
                            <option>Uttara, Dhaka, Bangladesh</option>
                            <option>Mymensingh, Bangladesh</option>
                            <option>Jamalpur, Bangladesh</option>
                            <option>Chittagong, Bangladesh</option>
                            <option>Rajshahi, Bangladesh</option>
                            <option>Sylhet, Bangladesh</option>
                            <option>Jessore, Bangladesh</option>
                        </select>
                    </div>
                    <div className='mb-5'>
                        <select className="select select-bordered w-full max-w-xs text-black">
                            <option disabled selected>Select department name</option>
                            <option>Medicine</option>
                            <option>Cardiology</option>
                            <option>Neurology</option>
                            <option>Sergury</option>
                            <option>Dental</option>
                            <option>Orthopedic and Spine Surgery</option>
                            <option>Radiology and Imaging</option>
                            <option>Plastic Surgery and Sonology</option>
                            <option>Vascular Sergery and Headache</option>
                            <option>Urology and Pysicial Medicine </option>
                        </select>
                    </div>
                    <button className="btn btn-secondary text-white">Search</button>
                </div>
            </div>
        </div>
    )
}

export default Banner
