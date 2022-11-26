import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, Outlet } from 'react-router-dom'
import auth from '../../firebase.init'
import useAdmin from '../../hooks/useAdmin/useAdmin'

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)

    return (
        <div className='w-11/12 mx-auto'>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    <Outlet />
                    {/* <!-- Page content here --> */}
                    <label htmlFor="my-drawer-2" className="btn btn-secondary text-white drawer-button lg:hidden">Side menu</label>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60  text-black z-100">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='listappointment'>Appointment list</Link></li>
                        <li><Link to='payment'>Payment details</Link></li>
                        {admin && <li><Link to='allpatient'>All patient</Link></li>}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dashboard