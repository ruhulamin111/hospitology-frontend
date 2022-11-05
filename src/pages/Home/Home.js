import React from 'react'
import Achievement from '../../components/Achievement/Achievement'
import Banner from '../../components/Banner/Banner'
import Benefits from '../../components/Benefits/Benefits'
import Category from '../../components/Category/Category'
import DoctorResult from '../../components/DoctorResult/DoctorResult'
import Video from '../../components/Video/Video'

const Home = () => {
  return (
    <div>
      <Banner />
      <DoctorResult />
      <Category />
      <Benefits />
      <Video />
      <Achievement />

    </div>
  )
}

export default Home
