import React from 'react'

function Footer() {
    return (
        <>
            <div className="container-fluid bg-dark">
                <div className='container d-flex'>
                    <div className='text_heading text-light'>
                        <h1 className='fw-bold text-wrap text-center mt-5 mx-5'>Delicious Burger & French Fry</h1>
                       <p className='fw-bold mt-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, unde.</p>
                    </div>
                    <div>
                        <img src="https://img.freepik.com/free-photo/grilled-burger-french-fries-food-generative-ai_188544-8516.jpg" />
                    </div>
                </div>
            </div>
            <div className='container-fluid d-flex'>
                <div className='bg-danger border rounded-circle mt-2'>
           <h2 className='text-warning fw-bolder p-3'>TasTy RiDe</h2>
                </div>
                <div className='d-flex justify-content-end'>
                    <p className='text-danger fw-bold'>
                        &#169; ALL RIGHTS RESERVED
                    </p>
                </div>
            </div>

        </>
    )
}

export default Footer