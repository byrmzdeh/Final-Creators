import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Brand from '../components/Brand'

const Mainlayout = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Brand/>
        <Footer/>
    </>
  )
}

export default Mainlayout
