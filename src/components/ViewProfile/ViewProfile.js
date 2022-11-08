import React from 'react'
import CommonBanner from '../CommonBanner/CommonBanner'
import { Link, useParams } from 'react-router-dom'
import useDoctorDetails from '../../hooks/useDoctorDetails/useDoctorDetails';


const ViewProfile = () => {
    const { id } = useParams();
    const [doctorDetails] = useDoctorDetails(id)

    return (
        <div>
            <CommonBanner />
            <div className="w-11/12 mx-auto my-10">
                <div className="grid lg:grid-cols-2 gap-10">
                    <div className=''>
                        <img src={doctorDetails.img} className="object-cover w-full rounded-lg" alt='' />
                        <div className='flex justify-center gap-10 mt-10'>
                            <Link to={`/offlineappointment/${doctorDetails._id}`} className="btn btn-primary">Appointment offline</Link>
                            <Link to='/offlineappointment' className="btn btn-secondary text-white">Appointment online</Link>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold mb-5">
                            {doctorDetails.name}
                        </h1>
                        <p className="mb-3">
                            <b>Designation:</b> {doctorDetails.designation}
                        </p>
                        <p className="mb-3">
                            <b>Qualifications:</b> {doctorDetails.qualifications}
                        </p>
                        <p className="mb-3">
                            <b>Specialty:</b> {doctorDetails.specialty}
                        </p>
                        <p className="mb-3">
                            <b>Department Name:</b> {doctorDetails.departmentname}
                        </p>
                        <p className="mb-3">
                            <b>Institute:</b> {doctorDetails.institute}
                        </p>
                        <p className="mb-3">
                            <b>Chamber Time:</b> {doctorDetails.chambertime}
                        </p>
                        <p className="mb-3">
                            <b>Room No:</b> {doctorDetails.roomno}
                        </p>
                        <p className="mb-3">
                            <b>Off Day:</b> {doctorDetails.offday}
                        </p>
                        <p className="mb-3">
                            <b>Hotline:</b>{doctorDetails.hotline}
                        </p>
                        <p className="mb-3">
                            <b>Branch Name:</b> {doctorDetails.branchname}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewProfile