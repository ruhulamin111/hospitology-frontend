import React from 'react'
import { useQuery } from 'react-query'
import Loading from '../Loading/Loading'

const AllPatient = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(`http://localhost:5000/users`).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <div className="overflow-x-auto my-4">
                <table className="table w-full text-black">
                    <thead>
                        <tr className='text-white'>
                            <th className=''>No.</th>
                            <th>Patient</th>
                            <th>Make admin</th>
                            <th>Delete admin </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.email}</td>
                                <td><button className='btn btn-sm btn-neutral'>Admin</button></td>
                                <td><button className='btn btn-sm bg-red-300'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default AllPatient
