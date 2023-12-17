import React from 'react'

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
                        <div className='bg-danger border rounded-circle'>
                            <h2 className='text-warning fw-bolder p-3'>TasTy RiDe</h2>
                        </div>
                        <ul className="navbar-nav d-flex flex-row">
                            <li className="nav-item mx-3">
                                <a className="nav-link active" aria-current="page" href="#">HOME</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#">MENU</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#">CONTACT</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#">ORDERS</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#">LOGIN</a>
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