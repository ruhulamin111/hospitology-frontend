import React from 'react'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import Loading from '../Loading/Loading'

const AllPatient = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: "GET",
        headers: {
            'authorization': `${localStorage.getItem('token')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    const makeAdmin = (user) => {
        const { email } = user;
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                'authorization': `${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('You have no permit to make an admin')
                } else {
                    return res.json()
                }
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('Admin selection done')
                }
            })
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
                                <td>{user.role !== 'admin' && <button className='btn btn-sm btn-neutral' onClick={() => makeAdmin(user)}>Admin</button>}</td>
                                <td><button className='btn btn-sm btn-accent'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default AllPatient
