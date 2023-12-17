import React, { useEffect, useState } from 'react'

function SignUp() {
    const [user, setUser] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [errors, setErrors] = useState({})


    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm


    const handleChange = (e) => {
        let { name, value } = e.target
        setUser({ ...user, [name]: value })
        console.log('Data is', user)
    }
    const handleSubmit = () => {
        setIsSubmit(true)
        if (Verify()) {
            if (localStorage.getItem('SignUpData')) {
                const userData = JSON.parse(localStorage.getItem('SignUpData'))

                userData.push(user)
                localStorage.setItem('SignUpData', JSON.stringify(userData))
                setIsSubmit(false)
                setUser({
                    Username: '',
                    Email: '',
                    Phone: '',
                    Password: '',
                    CnfPassword: '',
                    terms: 'off'
                })
                alert('Sign In successfully')
            } else {
                localStorage.setItem('SignUpData', JSON.stringify([user]))
            }

        } else {
            console.log('Something went wrong')
        }


    }
    const Verify = () => {
        let locErr = {}
        let returnVerify = true

        const addErrmsg = (msg, key) => {
            locErr[key] = msg
            returnVerify = false
        }

        let exists = false
        const userExist = () => {
            if (localStorage.getItem('SignUpData')) {
                const existUser = JSON.parse(localStorage.getItem('SignUpData'))
                existUser.forEach(e => {
                    if (e.Email === user.Email) {
                        exists = true
                    }
                });
                return exists;
            }
        }

        // for Username
        if (!user.Username) {
            addErrmsg('Name must be required', 'Username')
        } else if (user.Username.length < 2) {
            addErrmsg('Name should be at least 2 chars', 'Username')
        }


        // for Email
        if (!user.Email) {
            addErrmsg('Email must be required', 'Email')
        } else if (!emailRegex.test(user.Email)) {
            addErrmsg('Please enter valid email', 'Email')
        }
        else if (userExist) {
            addErrmsg('User exist already', 'Email')
        }


        // for Phone Number
        if (!user.Phone) {
            addErrmsg('Phone Number must be required', 'Phone')
        } else if (user.Phone.length < 10) {
            addErrmsg('Phone Number should be of 10 chars', 'Phone')
        }


        // for Password
        if (!user.Password) {
            addErrmsg('Password must be required', 'Password')
        } else if (!passwordRegex.test(user.Password)) {
            addErrmsg('Please enter strong password', 'Password')
        }


        // for Confirm Password
        if (!user.CnfPassword !== user.Password) {
            addErrmsg('Password is not matching', 'CnfPassword')
        }


        // for terms
        if (!user.terms) {
            addErrmsg('Terms & Conditions must be checked', 'terms')
        }
        setErrors(locErr)
        return returnVerify
    }

    useEffect(() => {
        Verify()
    }, [user])

    return (
        <>
            <div className="container-fluid mb-5">
                
                <div className="write d-flex">
                    <div className='bg-danger border rounded-circle mt-2'>
                        <h2 className='text-warning fw-bolder p-3'>TasTy RiDe</h2>
                    </div>
                </div>
                <div className='wel-head d-flex mt-5 mx-5'>

                    <h3 className='bg-danger shadow p-3 mb-5 bg-body rounded text-danger border border-warning border-5 fw-bolder'>Welcome</h3>
                </div>
                <p className='text-secondary mx-5 fw-normal'>Sign Up with your email or phone.</p>
                <div className="wrapper d-flex w-100">
                <div className='border-0 w-25 mx-5 mt-5'>

                    <div className="mb-3">
                        <label htmlFor="Username">Enter Username</label>
                        <input type="text" className='form-control' name='Username' id="Username" placeholder='Enter Username' onChange={handleChange} />
                        {isSubmit && errors.Username && <p className='text-danger'>{errors.Username}</p>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Email" >Email address</label>
                        <input type="email" className="form-control" id="Email" placeholder='Enter your email address' onChange={handleChange} />
                        {isSubmit && errors.Email && <p className='text-danger'>{errors.Email}</p>}
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>

                        <label htmlFor="Phone" className='mt-2'>Phone Number</label>
                        <input type="email" className="form-control" id="Phone" placeholder='Enter your phone number' onChange={handleChange} />
                        {isSubmit && errors.Phone && <p className='text-danger'>{errors.Phone}</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Password">Password</label>
                        <input type="password" className="form-control" id="Password" placeholder='Enter Password' onChange={handleChange} />
                        {isSubmit && errors.Password && <p className='text-danger'>{errors.Password}</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="CnfPassword">Confirm your Password</label>
                        <input type="password" className="form-control" id="CnfPassword" placeholder='Confirm your Password' onChange={handleChange} />
                        {isSubmit && errors.CnfPassword && <p className='text-danger'>{errors.CnfPassword}</p>}
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="terms" name='terms' onChange={handleChange} />
                        {isSubmit && errors.terms && <p className='text-danger'>{errors.terms}</p>}
                        <label className="form-check-label" htmlFor="terms">Accept terms & conditions</label>
                    </div>
                    <button type="submit" className="btn btn-danger text-warning fw-bolder mx-5 mt-3 fs-5" onClick={handleSubmit}>Submit</button>

                </div>
                <div className="image d-flex">
                    <img className='img-fluid w-75 justify-content-end' src="https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1000&format=pjpg&exif=0&iptc=0" alt="" />
                </div>
                <div>

                </div>
            </div>
            </div>

        </>
    )
}

export default SignUp