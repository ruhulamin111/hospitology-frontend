import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const ShowDoctor = ({ searchDoctors }) => {

    return (
        <div className='w-11/12 mx-auto py-10'>
            <h1 className='text-4xl font-bold text-primary mb-5 text-center'>Your Searched Doctors</h1>
            {searchDoctors.length === 0 && <p className='text-center mt-10'>Please search the doctor for results </p>}
            <div className='grid lg:grid-cols-3 gap-5'>
                {
                    searchDoctors?.map((doctor, index) => <div
                        key={index}
                        className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={doctor.img} alt="Shoes" className="rounded-xl h-60 object-cover" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{doctor.name}</h2>
                            <p>{doctor.department}</p>
                            <p>{doctor.branchname}</p>
                            <div className="card-actions">
                                <Link to={`/viewprofile/${doctor._id}`} className="font-bold flex items-center gap-2 btn text-white mt-5">
                                    Profile
                                    <FaLongArrowAltRight />
                                </Link>
                            </div>
                        </div>
                    </div>
                    )
                }


                {/* <div className="card w-96 bg-base-100 shadow-xl">
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
                </div> */}

            </div>
        </div>
    )
}

export default ShowDoctor