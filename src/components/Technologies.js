import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Technologies() {
    return (
        <div className='mt-3'>
            {/* links */}
            <ul className="nav nav-pills justify-content-around">
                <li className="nav-item">
                    <Link className="nav-link" to="html">HTML</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="javascript">JavaScript</Link>
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
