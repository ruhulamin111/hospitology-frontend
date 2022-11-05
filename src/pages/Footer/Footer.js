import React from 'react'
import { Link } from 'react-router-dom'
import { FaHospitalSymbol } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <div className='bg-secondary'>
            <footer className="footer w-11/12 mx-auto py-10 text-white">
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='/' className="link link-hover">Branding</Link>
                    <Link to='/' className="link link-hover">Design</Link>
                    <Link to='/' className="link link-hover">Marketing</Link>
                    <Link to='/' className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to='/' className="link link-hover">About us</Link>
                    <Link to='/' className="link link-hover">Contact</Link>
                    <Link to='/' className="link link-hover">Jobs</Link>
                    <Link to='/' className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to='/' className="link link-hover">Terms of use</Link>
                    <Link to='/' className="link link-hover">Privacy policy</Link>
                    <Link to='/' className="link link-hover">Cookie policy</Link>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-white">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16 text-black" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none text-white">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="footer border-t border-white w-11/12 mx-auto py-5 text-white">
                <div className="items-center grid-flow-col">
                    <FaHospitalSymbol className='text-5xl text-primary' />
                    <p>Hospitology Limited. <br />All copyright reserved &copy; {year}</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <Link to='/' className='text-2xl text-white hover:text-white hover:bg-primary duration-300 ease-in p-1 border border-white rounded-full hover:border-primary'><FaFacebook /></Link>
                        <Link to='/' className='text-2xl text-white hover:text-white hover:bg-primary duration-300 ease-in p-1 border border-white rounded-full hover:border-primary'><FaYoutube /></Link>
                        <Link to='/' className='text-2xl text-white hover:text-white hover:bg-primary duration-300 ease-in p-1 border border-white rounded-full hover:border-primary'><FaLinkedin /></Link>
                        <Link to='/' className='text-2xl text-white hover:text-white hover:bg-primary duration-300 ease-in p-1 border border-white rounded-full hover:border-primary'><FaTwitter /></Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
