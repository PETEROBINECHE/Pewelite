import React from 'react'
import { Outlet } from 'react-router-dom'
import HomeHeader from '../Components/HomeHeader'
import Footer from '../Components/Footer'

function HomeLayout() {
  return (
    <>
      <HomeHeader />
      <Outlet />
      <Footer />
    </>
  )
}

export default HomeLayout
