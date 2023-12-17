import React from 'react'

function MenuCard(props) {
    return (
        <>
            <div class="card mt-3" style={{ width: "18rem" }}>
                <img style={{height:"20rem"}} src={props?.menu.image} class="card-img-top pt-3 px-2" alt="..." />
                <div class="card-body">
                    <h5 class="card-title text-danger fw-bold text-center">{props?.menu.name}</h5>
                    <p>{props?.menu.description}</p>
                    <p className='text-warning fw-bolder'>{props?.menu.price}</p>

                    <a href="#" class="btn btn-danger text-light fw-bolder">Add to cart</a>
                </div>
            </div>

        </>
    )
}

export default MenuCard