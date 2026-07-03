import React from 'react'
import { Outlet } from 'react-router-dom'
import MainHeader from '../Components/MainHeader'
import Footer from '../Components/Footer'

function ServicesLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
      <Footer />
    </>
  )
}

export default ServicesLayout
