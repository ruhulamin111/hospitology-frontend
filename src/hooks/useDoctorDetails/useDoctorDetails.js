import { useEffect, useState } from 'react'

const useDoctorDetails = (id) => {
    const [doctorDetails, setDoctorDetails] = useState('')

    useEffect(() => {
        fetch(`https://hospitology-backend-production.up.railway.app/doctors/${id}`)
            .then(res => res.json())
            .then(data => setDoctorDetails(data))
    }, [id])

    return [doctorDetails, setDoctorDetails]

}

export default useDoctorDetails