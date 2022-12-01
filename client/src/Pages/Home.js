import React, { useState, useEffect } from "react"
import PriceCard from "../Components/Cards/PriceCard";
import axios from "axios"
const Home = () => {
    const [prices, setPrices] = useState("");
    useEffect(() => {

        fetchPrices();
    }, [])


    const fetchPrices = async () => {
        const { data } = await axios.get("/prices");
        setPrices(data);
    };
    const handleClick = async (e) => {
        e.preventDefault();
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