import React from 'react'
import { Link } from "react-router-dom"


const Nav = () => {
    return (
        <ul className="nav border">
            <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Active</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/register">Signup</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
            </li>

        </ul>

    )
}

export default Nav;