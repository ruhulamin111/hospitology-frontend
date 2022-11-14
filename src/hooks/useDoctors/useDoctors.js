import { useEffect, useState } from 'react'

function useDoctors(date, doctor) {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/available?date=${date}&doctor=${doctor}`)
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [date, doctor])

    return [doctors, setDoctors]
}

export default useDoctors
