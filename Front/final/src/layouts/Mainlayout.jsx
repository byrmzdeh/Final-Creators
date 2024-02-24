import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Brand from '../components/Brand'
import Cursor from "../components/Cursor";
import Scroll from '../components/Scroll'

const Mainlayout = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Cursor/>
        <Scroll/>
        <Brand/>
        <Footer/>
    </>
  )
}

export default Mainlayout
