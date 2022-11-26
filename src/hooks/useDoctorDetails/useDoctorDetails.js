import { useEffect, useState } from 'react'

const useDoctorDetails = (id) => {
    const [doctorDetails, setDoctorDetails] = useState('')

    useEffect(() => {
        fetch(`http://localhost:5000/doctors/${id}`)
            .then(res => res.json())
            .then(data => setDoctorDetails(data))
    }, [id])

    return [doctorDetails, setDoctorDetails]

}

export default useDoctorDetails