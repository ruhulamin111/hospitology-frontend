import React from 'react'
import banner from '../../assets/chamber.jpg'

const Banner = ({ setBranch, setDepartment }) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        const name = event.target.branch.value;
        const department = event.target.department.value;
        setBranch(name)
        setDepartment(department)
    }

    return (
        <div className="hero h-screen object-cover" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-primary">Find Your Doctor</h1>
                    <p className="mb-5 text-black">To serve the humanity as a whole with this noble vision Hospitology journey in June 1992. </p>

                    <form onSubmit={handleSubmit} className='w-full'>
                        <div className='mb-5 w-full'>
                            <select name='branch' className="select select-bordered w-full text-black">
                                <option disabled selected>Select branch name</option>
                                <option value='Mirpur'>Mirpur, Dhaka, Bangladesh</option>
                                <option value='Uttara'>Uttara, Dhaka, Bangladesh</option>
                                <option value='Dhanmondi'>Dhanmondi, Dhaka, Bangladesh</option>
                                <option value='Gulshan'>Gulshan, Dhaka, Bangladesh</option>
                                <option value='Mohammadpur'>Mohammadpur, Dhaka, Bangladesh</option>
                            </select>
                        </div>
                        <div className='mb-5 '>
                            <select name='department' className="select select-bordered w-full  text-black">
                                <option disabled selected>Select department name</option>
                                <option value='Medicine'>Medicine and Orthopedic</option>
                                <option value='Cardiology'>Cardiology and Vascular Sergery</option>
                                <option value='Neurology'>Neurology and Spine Surgery</option>
                                <option value='Radiology'>Radiology and Imaging</option>
                                <option value='Dental'>Dental and Headache</option>
                            </select>
                        </div>
                        <input type='submit' value='Search' className="btn btn-secondary text-white w-full" />
                    </form>

                    {/* <div className='mb-5'>
                        <select className="select select-bordered w-full max-w-xs text-black">
                            <option disabled selected>Select branch name</option>
                            <option value='Mirpur'>Mirpur, Dhaka, Bangladesh</option>
                            <option value='Uttara'>Uttara, Dhaka, Bangladesh</option>
                            <option value='Dhanmondi'>Dhanmondi, Dhaka, Bangladesh</option>
                            <option value='Gulshan'>Gulshan, Dhaka, Bangladesh</option>
                            <option value='Mohammadpur'>Mohammadpur, Dhaka, Bangladesh</option>
                        </select>
                    </div>
                    <div className='mb-5'>
                        <select className="select select-bordered w-full max-w-xs text-black">
                            <option disabled selected>Select department name</option>
                            <option value='Medicine'>Medicine and Orthopedic</option>
                            <option value='Cardiology'>Cardiology and Vascular Sergery</option>
                            <option value='Neurology'>Neurology and Spine Surgery</option>
                            <option value='Radiology'>Radiology and Imaging</option>
                            <option value='Dental'>Dental and Headache</option>
                        </select>
                    </div>
                    <button className="btn btn-secondary text-white">Search</button> */}
                </div>
            </div>
        </div>
    )
}

export default Banner
