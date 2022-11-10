import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)


    return (
        <div className="shadow-md ">
            <div className='navbar h-20 w-11/12 mx-auto font-bold'>
                <div className="navbar-start">

                    {/* small screen option  */}
                    <div className="dropdown">
                        <label tabIndex={0} className="mr-2 cursor-pointer lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li >
                                <Link className='duration-300 ease-in hover:text-secondary' to='/'>
                                    Home
                                </Link>
                            </li>
                            <li tabIndex={0}>
                                <Link className='duration-300 ease-in hover:text-secondary' to='/'>
                                    Doctors
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </Link>
                                <ul className="p-2">
                                    <li >
                                        <Link className='duration-300 ease-in hover:text-secondary' to='/'>
                                            Department wise
                                        </Link>
                                    </li>
                                    <li >
                                        <Link className='duration-300 ease-in hover:text-secondary' to='/'>
                                            Branch wise
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li >
                                <Link className='duration-300 ease-in hover:text-secondary' to='/'>
                                    Patient care
                                </Link>
                            </li>
                            <li tabIndex={0}>
                                <Link className='duration-300 ease-in hover:text-secondary' to='/'>
                                    Our services
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </Link>
                                <ul className="p-2">
                                    <li >
                                        <Link className='duration-300 ease-in hover:text-secondary' to='/'>
                                            Hospital service
                                        </Link>
                                    </li>
                                    <li >
                                        <Link className='duration-300 ease-in hover:text-secondary' to='/'>
                                            Diagonistic servic
                                        </Link>
                                    </li>
                                    <li >
                                        <Link className='duration-300 ease-in hover:text-secondary' to='/'>
                                            Dental service
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li >
                                <Link className='duration-300 ease-in hover:text-secondary' to='/'>
                                    About us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link to='/' className="normal-case text-3xl text-secondary hover:text-primary duration-300 ease-in">Hospitology</Link>
                </div>

                {/* large screen option  */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li >
                            <Link className='duration-300 ease-in hover:text-secondary' to='/'>
                                Home
                            </Link>
                        </li>
                        <li tabIndex={0}>
                            <Link className='duration-300 ease-in hover:text-secondary' to='/'>
                                Doctors
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul className="p-2 bg-white">
                                <li >
                                    <Link className='duration-300 ease-in hover:text-secondary' to='/'>
                                        Department wise
                                    </Link>
                                </li>
                                <li >
                                    <Link className='duration-300 ease-in hover:text-secondary' to='/'>
                                        Branch wise
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li >
                            <Link className='duration-300 ease-in hover:text-secondary' to='/'>
                                Patient care
                            </Link>
                        </li>
                        <li tabIndex={0}>
                            <Link className='duration-300 ease-in hover:text-secondary' to='/'>
                                Our services
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul className="p-2 bg-white">
                                <li >
                                    <Link className='duration-300 ease-in hover:text-secondary' to='/'>
                                        Hospital service
                                    </Link>
                                </li>
                                <li >
                                    <Link className='duration-300 ease-in hover:text-secondary' to='/'>
                                        Diagonistic servic
                                    </Link>
                                </li>
                                <li >
                                    <Link className='duration-300 ease-in hover:text-secondary' to='/'>
                                        Dental service
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li >
                            <Link className='duration-300 ease-in hover:text-secondary' to='/'>
                                About us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <span onClick={() => signOut(auth)} className="text-3xl text-secondary p-2 border rounded-full border-secondary hover:bg-secondary hover:text-white duration-300 ease-in">
                                <AiOutlineLogout />
                            </span>
                            :
                            <Link to='/signin' className="text-3xl text-secondary p-2 border rounded-full border-secondary hover:bg-secondary hover:text-white duration-300 ease-in">
                                <FaUserCircle />
                            </Link>
                    }

                </div>
            </div>
        </div >
    )
}

export default Header
