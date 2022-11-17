
import { useEffect, useState } from 'react'

function useSearchDoctors(branch, department) {
    const [searchDoctors, setSearchDoctors] = useState([])

    useEffect(() => {
        fetch(`https://hospitology-backend-production.up.railway.app/searchdoctors?branch=${branch}&department=${department}`)
            .then(res => res.json())
            .then(data => setSearchDoctors(data))
    }, [branch, department])

    return [searchDoctors, setSearchDoctors]

}

export default useSearchDoctors
