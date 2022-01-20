import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

function Technologies() {
    return (
        <div className='mt-3'>
            {/* links */}
            <ul className="nav nav-pills justify-content-around">
                <li className="nav-item">
                    <NavLink className="nav-link" to="html">HTML</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="javascript">JavaScript</NavLink>
                </li>

            </ul>
            {/* place holder for components */}
            <div className="container">
                <Outlet />
            </div>
        </div>
    )
}

export default Technologies
