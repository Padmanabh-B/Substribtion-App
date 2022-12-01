import React, { Fragment, useContext } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { isAuth } from '../Utils/functions';
import { UserContext } from "../Context/index"


const Nav = () => {
    const [state, setState] = useContext(UserContext);


    let navigate = useNavigate();
    const logout = () => {
        setState({user:{},toekn:""})
        localStorage.removeItem("auth")
        navigate("/login")
    }
    return (
        <ul className="nav border">
            <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>

            { state && state.token ? (
                <Fragment>

                    <li className="nav-item">
                        <span onClick={ logout } className="nav-link">Logout</span>
                    </li>
                </Fragment>

            ) : (
                <Fragment>

                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Signup</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                </Fragment>
            ) }



        </ul>

    )
}

export default Nav;