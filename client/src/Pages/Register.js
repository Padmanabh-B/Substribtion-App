import React, { useState,useContext } from "react"
import { useNavigate } from 'react-router-dom';
import Button from "../Components/Button";
import Input from "../Components/Input";
import axios from 'axios';
import toast from "react-hot-toast";
import {UserContext} from "../Context/index"



const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //context

    const [state, setState] = useContext(UserContext);


    let navigate = useNavigate();


    const handleClick = async (e) => {
        // console.log(name, email, password);
        try {
            e.preventDefault();
            const { data } = await axios.post('/register', {
                name, email, password,
            });
            console.log(data);
            if (data.error) {
                toast.error(data.error);
            } else {
                setName("")
                setEmail("")
                setPassword("")
                toast.success(`Hey ${data.user.name}. You are Part of Team Now Congrats`);
                setState(data);
                localStorage.setItem('auth', JSON.stringify(data))
                navigate("/login")
            }
        } catch (err) {
            console.log(err);
            toast.error("Something went wrong, Try Again")
        }

    }

    return (
        <div className="d-flex justify-content-center" style={ { height: "80vh" } }>
            <div className="container align-items-center d-flex">
                <div className="row col-md-6 offset-md-3 text-center">
                    <h1 className="pt-5 fw-bold">Lets Get Started</h1>
                    <p className="lead pb-4">
                        Sign up for freee. No Credit Card Required
                    </p>

                    <div className="form-group">
                        <Input label="Name" value={ name } setValue={ setName } />
                        <Input label="Email" type="email" value={ email } setValue={ setEmail } />
                        <Input label="Password" type="password" value={ password } setValue={ setPassword } />
                        <div className="d-grid">
                            <Button handleClick={ handleClick } type={ "danger" } text="Register" size="sm" />
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}


export default Register;