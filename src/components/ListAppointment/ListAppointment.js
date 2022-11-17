import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'

const ListAppointment = () => {
    const [user] = useAuthState(auth)
    const [appointment, setAppointment] = useState([])
    useEffect(() => {
        if (user) {
            fetch(`https://hospitology-backend-production.up.railway.app/bookings?email=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointment(data))
        }
    }, [user])

    return (
        <div>
            <div className="overflow-x-auto my-4">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Doctor</th>
                            <th>Visit hour</th>
                            <th>Date of appointment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointment.map((item, index) => <tr key={index}>
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
