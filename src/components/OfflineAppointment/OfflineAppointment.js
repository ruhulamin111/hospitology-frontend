import React, { useState } from 'react'
import CommonBanner from '../CommonBanner/CommonBanner'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';


const OfflineAppointment = () => {
    const [date, setDate] = useState(new Date())

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
                            Prof. Brig. Gen. Dr. Humayun Kabir
                        </h1>
                        <p className="mb-3">
                            <b>Specialty:</b> Medicine & Neurology
                        </p>
                        <p className="mb-3">
                            <b>Department Name:</b> Neuro Medicine
                        </p>
                        <p className="mb-3">
                            <b>Visit Hour:</b> 10:00 - 05:00
                        </p>
                        <p className="mb-3">
                            <b>Total Slots:</b> 10 Spaces
                        </p>
                        <p className="mb-3">
                            <b>Available Slots:</b> 5 Spaces
                        </p>
                        <p className="mb-3">
                            <b>Visit Fee:</b> $ 500
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
                                    <form className='text-center my-5'>
                                        <input type="text" value={format(date, 'PP')} className="input input-bordered w-full max-w-sm mt-5" />

                                        <select className="select select-bordered w-full max-w-sm mt-5">
                                            <option disabled selected>Select slot</option>
                                            <option>10.00-10.30</option>
                                            <option>10.00-10.30</option>
                                            <option>10.00-10.30</option>
                                            <option>10.00-10.30</option>
                                            <option>10.00-10.30</option>
                                        </select>

                                        <input type="number" placeholder="+88" className="input input-bordered w-full max-w-sm mt-5" />

                                        <input type="text" placeholder="Patient name" className="input input-bordered w-full max-w-sm mt-5" />

                                        <input type="email" placeholder="Address" className="input input-bordered w-full max-w-sm mt-5" />

                                        <input type="submit" value='Submit' className=" btn btn-primary w-full max-w-sm mt-5" />

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
