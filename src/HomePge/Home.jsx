import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import FrontLook from './FrontLook'

import { Route, Routes } from 'react-router-dom'
import Slider from './Slider'
import Menu from '../Menu/Menu'
import SignUp from '../Login/SignUp'


function Home() {
  return (
    <>
      <div className='container-fluid bg-danger'>
        <a className='text-decoration-none' href=""> <h5 className='text-light fw-bold d-flex justify-content-center align-items-center py-2 pointer'>Free Delivery for all orders over Rs.350. Order your food now!</h5></a>
      </div>
      <Navbar />
      <Routes>
        <Route path='/' element={<FrontLook />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/login' element={<SignUp/>} />
      </Routes>

{/* <Slider/> */}
      {/* <Footer /> */}
      

    </>
  )
}

export default Home