import React from 'react'


function FrontLook() {
  return (
    <>
    <div className="container-fluid d-flex">
    <div className="order flex-column">
        <div className='border border-2 border-3 border-warning justify-content-center align-self-center'>

        <h1 className='text-danger fw-bolder text-uppercase text-wrap text-center'>always fresh & crispy & always hot!</h1>
        </div>
        <button className='bg-danger text-light fw-bold p-2 px-3 border-0 rounded-3 justify-content-center align-items-center'>Order Now</button>
    </div>
    <div className="img">
        <img className='img-fluid' src="https://media.istockphoto.com/id/997678310/photo/whats-better-than-pizza-with-friends.jpg?s=612x612&w=0&k=20&c=dqp-e2hDjTU8UrA8V8XV8bFwshZhnIdjnz_L4_o_hbk=" />
    </div>
    </div>
    </>
  )
}

export default FrontLook