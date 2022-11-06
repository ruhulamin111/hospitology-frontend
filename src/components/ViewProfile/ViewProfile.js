import React from 'react'
import CommonBanner from '../CommonBanner/CommonBanner'
import doctor1 from '../../assets/woman-doctor-wearing-lab-coat-with-stethoscope-isolated.jpg'
import { Link } from 'react-router-dom'


const ViewProfile = () => {

    return (
        <div>
            <CommonBanner />
            <div className="w-11/12 mx-auto my-10">
                <div className="grid lg:grid-cols-2 gap-10">
                    <div className=''>
                        <img src={doctor1} className="object-cover w-full rounded-lg" alt='' />
                        <div className='flex justify-center gap-10 mt-10'>
                            <Link to='/offlineappointment' className="btn btn-primary">Appointment offline</Link>
                            <Link to='/offlineappointment' className="btn btn-secondary text-white">Appointment online</Link>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold mb-5">
                            Prof. Brig. Gen. Dr. Humayun Kabir
                        </h1>
                        <p className="mb-3">
                            <b>Designation:</b> Prof. Brig. Gen. Dr.
                        </p>
                        <p className="mb-3">
                            <b>Qualifications:</b> MBBS, FCPS(Medicine), FCPS (Neurology)</p>
                        <p className="mb-3">
                            <b>Specialty:</b> Medicine & Neurology
                        </p>
                        <p className="mb-3">
                            <b>Department Name:</b> Neuro Medicine
                        </p>
                        <p className="mb-3">
                            <b>Institute:</b> Combined Military Hospital, Dhaka
                        </p>
                        <p className="mb-3">
                            <b>Chamber Time:</b> Saturday to Thursday -5.00 PM to 9.00 PM</p>
                        <p className="mb-3">
                            <b>Room No:</b> 5012
                        </p>
                        <p className="mb-3">
                            <b>Off Day:</b> Friday
                        </p>
                        <p className="mb-3">
                            <b>Hotline:</b> +880123456789
                        </p>
                        <p className="mb-3">
                            <b>Branch Name:</b> Hospitology Limited, Dhaka
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewProfile