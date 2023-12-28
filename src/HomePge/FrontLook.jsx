import React from 'react'
import Slider from './Slider'
import "./front.css"


function FrontLook() {
  return (
    <>
    <div className="container-fluid d-flex">
    <div className="order flex-column">
        <div className='front-head justify-content-center align-self-center'>

        <h1 className='text-danger fw-bolder text-uppercase text-wrap text-center'>always fresh & crispy & always hot!</h1>
        </div>
        <button className='front-button bg-danger text-light fw-bold p-2 px-3 border-0 rounded-3 justify-content-center align-items-center'>Order Now</button>
    </div>
    <div className="front-img">
        <img className='img-fluid img-height' src="https://media.istockphoto.com/id/997678310/photo/whats-better-than-pizza-with-friends.jpg?s=612x612&w=0&k=20&c=dqp-e2hDjTU8UrA8V8XV8bFwshZhnIdjnz_L4_o_hbk=" />
    </div>
    </div>
    <Slider/>
    </>
  )
}

export default FrontLook