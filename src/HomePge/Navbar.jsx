import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
    return (
        <>
            <div className='border-bottom border-2 '>


                <div className="collapse " id="navbarToggleExternalContent">
                    <div className="bg-dark p-4">
                        <h5 className="text-white h4">Collapsed content</h5>
                        <span className="text-muted">Toggleable via the navbar brand.</span>
                    </div>
                </div>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {/* <div className="collapse navbar-collapse" id="navbarNavDropdown"> */}
                        <div className='nav-logo bg-danger border rounded-circle'>
                            <h2 className='text-warning fw-bolder p-3'>TasTy RiDe</h2>
                        </div>
                        <ul className="navbar-nav d-flex flex-row">
                            <li className="nav-item mx-3">
                                <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="menu">MENU</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="contact">CONTACT</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="order">ORDERS</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="login">LOGIN</Link>
                            </li>

                        </ul>
                    </div>
                    {/* </div> */}
                </nav>
            </div>
        </>

    )
}

export default Navbar