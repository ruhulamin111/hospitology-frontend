import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { motion } from "framer-motion"


const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
        localStorage.removeItem('token')
    }

    return (
        <div className="sticky top-0 z-[1000] bg-white shadow-md">
            <div className='navbar h-20 max-2xl:w-11/12 mx-auto font-bold text-black'>
                <div className="navbar-start">

                    {/* small screen option  */}
                    <div className="dropdown">
                        <label tabIndex={0} className="mr-2 cursor-pointer lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <motion.li
                                initial={{ x: 1 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ x: 10 }}
                            >
                                <Link className='duration-300 ease-in hover:text-secondary' to='/'>
                                    Home
                                </Link>
                            </motion.li>

                            <li tabIndex={0} >
                                <Link className='duration-300 ease-in hover:text-secondary' to=''>
                                    Doctors
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </Link>
                                <ul className="p-2 bg-white">
                                    <motion.li
                                        initial={{ x: 1 }}
                                        transition={{ duration: 0.5 }}
                                        whileHover={{ x: 10 }}
                                    >
                                        <Link className='duration-300 ease-in hover:text-secondary' to='/department'>
                                            Department wise
                                        </Link>
                                    </motion.li>
                                    <motion.li
                                        initial={{ x: 1 }}
                                        transition={{ duration: 0.5 }}
                                        whileHover={{ x: 10 }}
                                    >
                                        <Link className='duration-300 ease-in hover:text-secondary' to='/branch'>
                                            Branch wise
                                        </Link>
                                    </motion.li>
                                </ul>
                            </li>
                            <motion.li
                                initial={{ x: 1 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ x: 10 }}
                            >
                                <Link className='duration-300 ease-in hover:text-secondary' to='/patient'>
                                    Patient care
                                </Link>
                            </motion.li>
                            <li tabIndex={0}>
                                <Link className='duration-300 ease-in hover:text-secondary' to=''>
                                    Our services
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </Link>
                                <ul className="p-2 bg-white">
                                    <motion.li
                                        initial={{ x: 1 }}
                                        transition={{ duration: 0.5 }}
                                        whileHover={{ x: 10 }}
                                    >
                                        <Link className='duration-300 ease-in hover:text-secondary' to='/hospital'>
                                            Hospital service
                                        </Link>
                                    </motion.li>
                                    <motion.li
                                        initial={{ x: 1 }}
                                        transition={{ duration: 0.5 }}
                                        whileHover={{ x: 10 }}
                                    >
                                        <Link className='duration-300 ease-in hover:text-secondary' to='/diagonistic'>
                                            Diagonistic servic
                                        </Link>
                                    </motion.li>
                                    <motion.li
                                        initial={{ x: 1 }}
                                        transition={{ duration: 0.5 }}
                                        whileHover={{ x: 10 }}
                                    >
                                        <Link className='duration-300 ease-in hover:text-secondary' to='/dental'>
                                            Dental service
                                        </Link>
                                    </motion.li>
                                </ul>
                            </li>
                            <motion.li
                                initial={{ x: 1 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ x: 10 }}
                            >
                                <Link className='duration-300 ease-in hover:text-secondary' to='/about'>
                                    About us
                                </Link>
                            </motion.li>
                            {
                                user && <motion.li
                                    initial={{ x: 1 }}
                                    transition={{ duration: 0.5 }}
                                    whileHover={{ x: 10 }}
                                >
                                    <Link className='duration-300 ease-in hover:text-secondary' to='/dashboard'>
                                        Dashboard
                                    </Link>
                                </motion.li>
                            }
                        </ul>

                    </div>
                    <Link to='/' className="normal-case text-3xl text-secondary ">Hospitology</Link>
                </div>

                {/* large screen option  */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <motion.li
                            initial={{ x: 1 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ x: 10 }}  >
                            <Link className='duration-300 ease-in hover:text-secondary' to='/'>
                                Home
                            </Link>
                        </motion.li>

                        <li tabIndex={0} >
                            <Link className='duration-300 ease-in hover:text-secondary' to=''>
                                Doctors
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul className="p-2 bg-white">
                                <motion.li
                                    initial={{ x: 1 }}
                                    transition={{ duration: 0.5 }}
                                    whileHover={{ x: 10 }}
                                >
                                    <Link className='duration-300 ease-in hover:text-secondary' to='/department'>
                                        Department wise
                                    </Link>
                                </motion.li>
                                <motion.li
                                    initial={{ x: 1 }}
                                    transition={{ duration: 0.5 }}
                                    whileHover={{ x: 10 }}
                                >
                                    <Link className='duration-300 ease-in hover:text-secondary' to='/branch'>
                                        Branch wise
                                    </Link>
                                </motion.li>
                            </ul>
                        </li>
                        <motion.li
                            initial={{ x: 1 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ x: 10 }}                        >
                            <Link className='duration-300 ease-in hover:text-secondary' to='/patient'>
                                Patient care
                            </Link>
                        </motion.li>
                        <li tabIndex={0}>
                            <Link className='duration-300 ease-in hover:text-secondary' to=''>
                                Our services
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul className="p-2 bg-white">
                                <motion.li
                                    initial={{ x: 1 }}
                                    transition={{ duration: 0.5 }}
                                    whileHover={{ x: 10 }}
                                >
                                    <Link className='duration-300 ease-in hover:text-secondary' to='/hospital'>
                                        Hospital service
                                    </Link>
                                </motion.li>
                                <motion.li
                                    initial={{ x: 1 }}
                                    transition={{ duration: 0.5 }}
                                    whileHover={{ x: 10 }}
                                >
                                    <Link className='duration-300 ease-in hover:text-secondary' to='/diagonistic'>
                                        Diagonistic servic
                                    </Link>
                                </motion.li>
                                <motion.li
                                    initial={{ x: 1 }}
                                    transition={{ duration: 0.5 }}
                                    whileHover={{ x: 10 }}
                                >
                                    <Link className='duration-300 ease-in hover:text-secondary' to='/dental'>
                                        Dental service
                                    </Link>
                                </motion.li>
                            </ul>
                        </li>
                        <motion.li
                            initial={{ x: 1 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ x: 10 }}                        >
                            <Link className='duration-300 ease-in hover:text-secondary' to='/about'>
                                About us
                            </Link>
                        </motion.li>
                        {
                            user && <motion.li
                                initial={{ x: 1 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ x: 10 }}
                            >
                                <Link className='duration-300 ease-in hover:text-secondary' to='/dashboard'>
                                    Dashboard
                                </Link>
                            </motion.li>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <Link onClick={handleSignOut} className="text-2xl text-secondary p-2 border rounded-full border-secondary hover:bg-secondary hover:text-white duration-300 ease-in">
                                <AiOutlineLogout />
                            </Link>
                            :
                            <Link to='/signin' className="text-2xl text-secondary p-2 border rounded-full border-secondary hover:bg-secondary hover:text-white duration-300 ease-in">
                                <FaUserCircle />
                            </Link>
                    }

                </div>
            </div>
        </div >
    )
}

export default Header
