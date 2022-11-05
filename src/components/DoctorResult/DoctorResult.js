import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import doctor1 from '../../assets/woman-doctor-wearing-lab-coat-with-stethoscope-isolated.jpg'
import doctor2 from '../../assets/medical-workers-covid-19-vaccination-concept-confident-professional-doctor-female-nurse-blue-scrubs-stethoscope-show-thumbs-up-assure-guarantee-best-quality-service-clinic.jpg'
import doctor3 from '../../assets/portrait-smiling-male-doctor.jpg'
import doctor4 from '../../assets/portrait-successful-young-doctor-with-folder-stethoscope.jpg'
import doctor5 from '../../assets/doctor-with-his-arms-crossed-white-background.jpg'
import { FaLongArrowAltRight } from 'react-icons/fa';



const DoctorResult = () => {


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
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className='my-10'>
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
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default DoctorResult