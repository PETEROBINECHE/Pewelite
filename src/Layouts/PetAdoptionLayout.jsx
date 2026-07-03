import React from 'react'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

function PetAdoptionLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}

export default PetAdoptionLayout
