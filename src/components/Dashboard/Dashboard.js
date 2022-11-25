import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
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
                        <li><Link to='listappointment'>Sidebar Item 1</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dashboard