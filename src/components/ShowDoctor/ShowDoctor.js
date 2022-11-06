import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import doctor1 from '../../assets/woman-doctor-wearing-lab-coat-with-stethoscope-isolated.jpg'
import doctor2 from '../../assets/medical-workers-covid-19-vaccination-concept-confident-professional-doctor-female-nurse-blue-scrubs-stethoscope-show-thumbs-up-assure-guarantee-best-quality-service-clinic.jpg'
import doctor3 from '../../assets/portrait-smiling-male-doctor.jpg'


const ShowDoctor = () => {

    return (
        <div className='w-11/12 mx-auto py-10'>
            <h1 className='text-4xl font-bold text-primary mb-5 '>Your Searched Doctors</h1>
            <div className='grid lg:grid-cols-3 gap-5'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={doctor1} alt="Shoes" className="rounded-xl h-60 object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Dr. Abu Bakar Siddique</h2>
                        <p>Medicine</p>
                        <p>Hospitology Medical College Hospital</p>
                        <div className="card-actions">
                            <Link to='/viewprofile' className="font-bold flex items-center gap-2 btn text-white mt-5">
                                View profile
                                <FaLongArrowAltRight />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={doctor2} alt="Shoes" className="rounded-xl h-60 object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Dr. Abu Bakar Siddique</h2>
                        <p>Medicine</p>
                        <p>Hospitology Medical College Hospital</p>
                        <div className="card-actions">
                            <Link to='' className="font-bold flex items-center gap-2 btn text-white mt-5">
                                View profile
                                <FaLongArrowAltRight />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={doctor3} alt="Shoes" className="rounded-xl h-60 object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Dr. Abu Bakar Siddique</h2>
                        <p>Medicine</p>
                        <p>Hospitology Medical College Hospital</p>
                        <div className="card-actions">
                            <Link to='' className="font-bold flex items-center gap-2 btn text-white mt-5">
                                View profile
                                <FaLongArrowAltRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowDoctor