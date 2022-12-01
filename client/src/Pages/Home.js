import React, { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import PriceCard from "../Components/Cards/PriceCard";
import axios from "axios"
import { UserContext } from "../Context/index"



const Home = () => {
    const [state, setState] = useContext(UserContext)
    const [prices, setPrices] = useState("");

    let navigate = useNavigate();


    useEffect(() => {
        fetchPrices();
    }, [])


    const fetchPrices = async () => {
        const { data } = await axios.get("/prices");
        setPrices(data);
    };
    const handleClick = async (e, price) => {
        e.preventDefault();

        if (state && state.token) {
            const { data } = await axios.post('/create-subsription',{
                priceId: price.id
            });
            window.open(data);
        } else {
            navigate("/register")
        }

    }

    return (

        <>
            <div className="container-fluid">
                <div className="row col-md-6 offset-md-3 text-center">
                    <h1 className="pt-5 fw-bold">Explore the right plan for your Business</h1>
                    <p className="lead pb-4">
                        Choose a Plan that suites you best
                    </p>

                </div>
                <div className="row  pt-5 mb-3 text-center">

                    { prices && prices.map((price) => (<PriceCard key={ price.id } price={ price } handleClick={ handleClick } />)) }


                </div>
            </div>
            {/* {second row} */ }

        </>


    )
}


export default Home;