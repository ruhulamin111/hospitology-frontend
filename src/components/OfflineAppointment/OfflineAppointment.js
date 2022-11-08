import React, { useState } from 'react'
import CommonBanner from '../CommonBanner/CommonBanner'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { useParams } from 'react-router-dom';
import useDoctorDetails from '../../hooks/useDoctorDetails/useDoctorDetails';


const OfflineAppointment = () => {
    const [date, setDate] = useState(new Date())
    const { id } = useParams();
    const [doctorDetails] = useDoctorDetails(id)
    const [close, setClose] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const phone = event.target.phone.value;
        console.log('form', name, phone)
        setClose(true)
    }



    return (
        <div>
            <CommonBanner />
            <div className="w-11/12 mx-auto my-10">
                <div className="grid lg:grid-cols-2">
                    <div>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                        <h3 className='text-xl font-bold mt-5'>Your selected date {format(date, 'PP')}</h3>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold mb-5">
                            {doctorDetails.name}
                        </h1>
                        <p className="mb-3">
                            <b>Specialty:</b> {doctorDetails.specialty}
                        </p>
                        <p className="mb-3">
                            <b>Department Name:</b> {doctorDetails.department}
                        </p>
                        <p className="mb-3">
                            <b>Visit Hour:</b> 10:00 - 12:00
                        </p>
                        <p className="mb-3">
                            <b>Total Slots:</b> 6 Spaces
                        </p>
                        <p className="mb-3">
                            <b>Available Slots:</b> {doctorDetails.visithour?.length} Spaces
                        </p>
                        <p className="mb-3">
                            <b>Visit Fee:</b> $ {doctorDetails.visitfee}
                        </p>
                        {/* The button to open modal */}
                        <label htmlFor="patient-info" className="btn btn-secondary text-white">Patient info</label>
                        <div>
                            {/* Put this part before </body> tag */}

                            <input type="checkbox" id="patient-info" className="modal-toggle" />
                            <div className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <label htmlFor="patient-info" className="btn btn-md btn-circle absolute right-2 top-2">✕</label>
                                    <h3 className="font-bold text-xl">Patient Information</h3>
                                    <form onSubmit={handleSubmit} className='text-center my-5'>
                                        <input type="text" value={format(date, 'PP')} className="input input-bordered w-full max-w-sm mt-5" />

                                        <select name='slot' className="select select-bordered w-full max-w-sm mt-5">
                                            <option disabled selected>Select slot</option>
                                            {
                                                doctorDetails.visithour?.map((slot, index) => <option key={index} value='10:00-10:20'>{slot}</option>
                                                )
                                            }

                                            {/* <option value='10:00-10:20'>10.00-10.20</option>
                                            <option value='10:20-10:40'>10.20-10.40</option>
                                            <option value='10:40-11:00'>10.40-11.00</option>
                                            <option value='11:00-11:20'>11.00-11.20</option>
                                            <option value='11:20-11:40'>11.20-11.40</option>
                                            <option value='11:40-12:00'>11.40-12.00</option> */}
                                        </select>

                                        <input name='phone' type="number" placeholder="+88" className="input input-bordered w-full max-w-sm mt-5" required />

                                        <input name='name' type="text" placeholder="Patient name" className="input input-bordered w-full max-w-sm mt-5" required />

                                        <input name='' type="email" placeholder="Address" className="input input-bordered w-full max-w-sm mt-5" />

                                        <input type="submit" value='Submit' className=" btn btn-primary w-full max-w-sm mt-5" >
                                        </input>


                                    </form>
                                    {/* <div className="modal-action">
                                        <label htmlFor="patient-info" className="btn">Submit</label>
                                    </div> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OfflineAppointment
