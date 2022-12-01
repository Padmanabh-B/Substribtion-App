import React from 'react'

const PriceCard = ({ price, handleSubsription }) => {

    const dynamicDescription = (price) => {
        if (price.nickname === 'BASIC') {
            return "5 Exclusive Stocks";
        } else if
            (price.nickname === 'STANDARD') {
            return "10 Exclusive Stocks";
        } else if
            (price.nickname === 'PREMIUM') {
            return "20 Exclusive Stocks";
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
                            <li>Free Market Ananlysis</li>
                            <li>Email Support </li>
                            <li>Helth Center Access</li>
                        </ul>
                        <button onClick={ () => handleSubsription(price) }
                            className={ `w-100 btn btn-lg ${buttonStyle()} border border-white text-white ` } >Signup</button>
                    </div>
                </div>
            </div>

        </>
    )
}


export default PriceCard;