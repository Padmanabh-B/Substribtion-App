import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { UserContext } from "../../Context/index"


const PriceCard = ({ price, handleSubsription }) => {

    const [state] = useContext(UserContext)
    const dynamicDescription = (price) => {
        if (price.nickname === 'BASIC') {
            return "300 Websites";
        } else if
            (price.nickname === 'STANDARD') {
            return "350 Websites";
        } else if
            (price.nickname === 'PREMIUM') {
            return "400 Websites";
        }
    }

    const buttonStyle = () => {
        return (price.nickname === 'BASIC' ? "btn-outline-danger" : 'btn-danger')

    }


    const headerStyle = () => {
        return price.nickname === 'PREMIUM' ? "bg-danger text-light" : '';
    }

    const borderStyle = () => {
        return price.nickname === 'PREMIUM' ? "border-danger" : '';

    }

    const buttonText = () => {
        return state && state.token ? "Buy The Plan" : "Sign Up"
    }



    return (
        <>

            <div className="col">
                <div className={ `card mb-4 rounded-3 shadow-sm  bg-dark text-white border border-secondary ${borderStyle}` }>
                    <div className={ `card-header py-3 ${headerStyle()}` }>
                        <h4 className="my-0 fw-normal">{ price.nickname }</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">
                            { (price.unit_amount / 100).toLocaleString("en-US", {
                                style: "currency",
                                currency: "INR"
                            }) }<small className="text-muted fw-light" />
                        </h1>
                        <ul className="list-unstyled mt-3 mt-4">
                            <li className='fw-bold'>{ dynamicDescription(price) }</li>
                            <li className='mt-3 mb-3'>200 GB SSD Storage</li>
                            <li className='mt-3 mb-3'>Free Email</li>
                            <li className='mt-3 mb-3'>Unlimited Bandwidth</li>
                            <li className='mt-3 mb-3'>Unlimited Databases</li>
                            <ul className='list-unstyled mt-3 mt-4'>
                                <li className='mt-3 mb-3' >3 GB RAM</li>
                                <li className='mt-3 mb-3' >2 CPU Cores</li>
                                <li className='mt-3 mb-3'>Dedicated Resources</li>
                                <li className='mt-3 mb-3' >Unlimited Free SSL</li>
                            </ul>
                        </ul>
                        <Link to="/register">
                            <button
                                // onClick={ () => handleSubsription(price) }
                                className={ `w-100 btn btn-lg ${buttonStyle()} border border-white text-white ` } >{ buttonText() }

                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}


export default PriceCard;

