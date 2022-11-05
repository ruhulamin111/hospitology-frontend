import React from 'react'
import Banner from '../../components/Banner/Banner'
import Benefits from '../../components/Benefits/Benefits'
import Category from '../../components/Category/Category'
import DoctorResult from '../../components/DoctorResult/DoctorResult'

const Home = () => {
  return (
    <div>
      <Banner />
      <DoctorResult />
      <Category />
      <Benefits />

    </div>
  )
}

export default Home
