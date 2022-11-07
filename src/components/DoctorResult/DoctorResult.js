import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import useDoctors from '../../hooks/useDoctors/useDoctors';

const DoctorResult = () => {
    const [doctors] = useDoctors()

    return (
        <div className='w-11/12 mx-auto py-10'>
            <div className='flex items-center justify-between'>
                <h1 className='text-4xl font-bold text-primary mb-5 '>Fall in love with <br /> <span className='text-secondary'>Our Specialist</span></h1>
                <FaLongArrowAltRight className='text-3xl' />
            </div>
            <Swiper
                className='cursor-pointer'
                spaceBetween={50}
                slidesPerView={3}
            >
                {
                    doctors?.slice(0, 5).map((doctor, index) => <SwiperSlide key={index} className='my-10'>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={doctor.img} alt="Shoes" className="rounded-xl h-60 object-cover" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{doctor.name}</h2>
                                <p>{doctor.department}</p>
                                <p>{doctor.branchname}</p>
                                <p>Hotline: {doctor.hotline}</p>
                            </div>
                        </div>
                    </SwiperSlide>)
                }

                {/* <SwiperSlide className='my-10'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={doctor1} alt="Shoes" className="rounded-xl h-60 object-cover" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Dr. Abu Bakar Siddique</h2>
                            <p>Medicine</p>
                            <p>Hospitology Medical College Hospital</p>
                            <p>Hotline: +88012345679, +880134569872</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='my-10'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={doctor2} alt="Shoes" className="rounded-xl h-60 object-cover" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Dr. Abu Bakar Siddique</h2>
                            <p>Medicine</p>
                            <p>Hospitology Medical College Hospital</p>
                            <p>Hotline: +88012345679, +880134569872</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='my-10'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={doctor3} alt="Shoes" className="rounded-xl h-60 object-cover" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Dr. Abu Bakar Siddique</h2>
                            <p>Medicine</p>
                            <p>Hospitology Medical College Hospital</p>
                            <p>Hotline: +88012345679, +880134569872</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='my-10'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={doctor4} alt="Shoes" className="rounded-xl h-60 object-cover" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Dr. Abu Bakar Siddique</h2>
                            <p>Medicine</p>
                            <p>Hospitology Medical College Hospital</p>
                            <p>Hotline: +88012345679, +880134569872</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='my-10'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={doctor5} alt="Shoes" className="rounded-xl h-60 object-cover" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Dr. Abu Bakar Siddique</h2>
                            <p>Medicine</p>
                            <p>Hospitology Medical College Hospital</p>
                            <p>Hotline: +88012345679, +880134569872</p>
                        </div>
                    </div>
                </SwiperSlide> */}

            </Swiper>
        </div>
    )
}

export default DoctorResult