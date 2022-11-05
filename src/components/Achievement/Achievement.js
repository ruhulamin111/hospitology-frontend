import React from 'react'
import { FaStethoscope } from 'react-icons/fa';
import { FaUserNurse } from 'react-icons/fa';


const Achievement = () => {

    return (
        <div className='w-11/12 mx-auto py-10'>
            <h1 className='text-4xl font-bold text-primary mb-10'>We are achieved </h1>
            <div className="stats shadow w-full ">
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <FaStethoscope className='text-3xl' />
                    </div>
                    <div className="stat-title">Total Specialist</div>
                    <div className="stat-value text-primary">500+</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUserNurse className='text-3xl' />
                    </div>
                    <div className="stat-title">Well behaviour nurse</div>
                    <div className="stat-value text-secondary">1000+</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="https://placeimg.com/128/128/people" alt='' />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value text-primary">100K+</div>
                    <div className="stat-title">Satisfied patient</div>
                </div>
            </div>
        </div>
    )
}

export default Achievement
