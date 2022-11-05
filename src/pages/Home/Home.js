import React from 'react'
import Achievement from '../../components/Achievement/Achievement'
import Banner from '../../components/Banner/Banner'
import Benefits from '../../components/Benefits/Benefits'
import Category from '../../components/Category/Category'
import DoctorResult from '../../components/DoctorResult/DoctorResult'
import Testimonial from '../../components/Testimonial/Testimonial'
import Video from '../../components/Video/Video'

const Home = () => {
  return (
    <div>
      <Banner />
      <DoctorResult />
      <Category />
      <Benefits />
      <Achievement />
      <Video />
      <Testimonial />

    </div>
  )
}

export default Home
