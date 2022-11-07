
import { useEffect, useState } from 'react'

function useSearchDoctors(branch, department) {
    const [searchDoctors, setSearchDoctors] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/searchdoctors?branch=${branch}&department=${department}`)
            .then(res => res.json())
            .then(data => setSearchDoctors(data))
    }, [branch, department])

    return [searchDoctors, setSearchDoctors]

}

export default useSearchDoctors
