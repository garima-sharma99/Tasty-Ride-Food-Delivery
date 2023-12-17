import React from 'react'
import MenuCard from './MenuCard'
import { foodMenu } from "./MenuData";

function Menu() {


    return (
        <>
            <div className='container-fluid d-flex'>
                <div className="row">
                    {
                        foodMenu.map(e => (
                            <div className="col-md-3">
                                <MenuCard menu={e} />
                            </div>
                        ))

                    }
                </div>
            </div>


        </>
    )
}

export default Menu