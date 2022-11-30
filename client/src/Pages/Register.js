import React, { useState } from "react"
import Button from "../Components/Button";
import Input from "../Components/Input";
import axios from 'axios';
import toast from "react-hot-toast";

const Register = () => {
    const [name, setName] = useState("paddu");
    const [email, setEmail] = useState("abc@dev.com");
    const [password, setPassword] = useState("12345");


    const handleClick = async (e) => {
        // console.log(name, email, password);
        try {
            e.preventDefault();
            const { data } = await axios.post('http://localhost:8000/api/register', {
                name, email, password,
            });
            console.log(data);
            if (data.error) {
                toast.error(data.error);
            } else {
                toast.success("Registration Successful... Please Login");
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