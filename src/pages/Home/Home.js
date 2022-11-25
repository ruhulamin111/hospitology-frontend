import React, { useState } from 'react'
import Achievement from '../../components/Achievement/Achievement'
import Banner from '../../components/Banner/Banner'
import Benefits from '../../components/Benefits/Benefits'
import Category from '../../components/Category/Category'
import DoctorResult from '../../components/DoctorResult/DoctorResult'
import ShowDoctor from '../../components/ShowDoctor/ShowDoctor'
import Testimonial from '../../components/Testimonial/Testimonial'
import Video from '../../components/Video/Video'
import WhatsApp from '../../components/WhatsApp/WhatsApp'
import useSearchDoctors from '../../hooks/useSearchDoctors/useSearchDoctors'

const Home = () => {
  const [branch, setBranch] = useState('')
  const [department, setDepartment] = useState('')
  const [searchDoctors] = useSearchDoctors(branch, department)

  return (
    <div>
      <Banner setBranch={setBranch} setDepartment={setDepartment} />
      <ShowDoctor searchDoctors={searchDoctors} />
      <DoctorResult />
      <Category />
      <Benefits />
      <Achievement />
      <Video />
      <Testimonial />
      <WhatsApp />
    </div>
  )
}

export default Home
