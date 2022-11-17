import { useEffect, useState } from 'react'

function useDoctors() {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch(`https://hospitology-backend-production.up.railway.app/doctors`)
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return [doctors, setDoctors]
}

export default useDoctors
