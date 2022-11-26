import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'

const ListAppointment = () => {
    const [user] = useAuthState(auth)
    const [appointment, setAppointment] = useState([])
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/bookings?email=${user.email}`, {
                method: "GET",
                headers: {
                    'authorization': `${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => setAppointment(data))
        }
    }, [user])

    return (
        <div>
            <div className="overflow-x-auto my-4">
                <table className="table w-full text-black">
                    <thead>
                        <tr className='text-white'>
                            <th className=''>No.</th>
                            <th>Doctor</th>
                            <th>Visit hour</th>
                            <th>Date of appointment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointment?.map((item, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{item.doctor}</td>
                                <td>{item.slot}</td>
                                <td>{item.date}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default ListAppointment
