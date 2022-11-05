import React from 'react'
import { Link } from 'react-router-dom'
import service1 from '../../assets/24-hours.png'
import service2 from '../../assets/charity.png'
import service3 from '../../assets/hospital-bed.png'
import service4 from '../../assets/studying.png'
import service5 from '../../assets/father.png'
import service6 from '../../assets/hospital (2).png'
import { FaLongArrowAltRight } from 'react-icons/fa';


const Category = () => {

    return (
        <div className='w-11/12 mx-auto py-10'>
            <h1 className='text-4xl font-bold text-primary mb-5 text-center'>Our Qualitiful <br /> <span className='text-secondary'>Services</span></h1>
            <div className="grid lg:grid-cols-3  gap-5">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={service1} alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">24/7 Service</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <Link to='' className="text-primary font-bold flex items-center gap-2">
                                Explore now
                                <FaLongArrowAltRight />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={service2} alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Blood Donation</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <Link to='' className="text-primary font-bold flex items-center gap-2">
                                Explore now
                                <FaLongArrowAltRight />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={service3} alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Super Delux Bed</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <Link to='' className="text-primary font-bold flex items-center gap-2">
                                Explore now
                                <FaLongArrowAltRight />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={service4} alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Mothes Care</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <Link to='' className="text-primary font-bold flex items-center gap-2">
                                Explore now
                                <FaLongArrowAltRight />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={service5} alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Baby Care</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <Link to='' className="text-primary font-bold flex items-center gap-2">
                                Explore now
                                <FaLongArrowAltRight />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={service6} alt="Shoes" className="rounded-xl h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Special Doctors</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <Link to='' className="text-primary font-bold flex items-center gap-2">
                                Explore now
                                <FaLongArrowAltRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
