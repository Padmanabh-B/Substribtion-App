import React from 'react';
import { UserContext } from "../../client/src/Context";
import User from "../models/user";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)


export const prices = async (req, res) => {
    const prices = await stripe.prices.list();
    console.log("prices", prices);
    res.json(prices.data.reverse())
};

export const createSubscription = async (req, res) => {
    try {
        const user = await User.findById(req.user._id)

        const session = await stripr.checkout.sessions.create({
            mode: "subscription",
            payment_method_types: ["card"],
            line_items: [
                {
                    price: req.body.priceId,
                    quantity: 1,
                }
            ],
            customer:user.stripe_customer_id,
            success_url : process.env.STRIPE_SUCCESS_URL,
            cancel_url : process.env.STRIPE_CANCEL_URL,

        });
    } catch (error) {
        console.log(error);

    }
}