
const  User = require ("../models/user");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)


exports.prices = async (req, res) => {
    const prices = await stripe.prices.list();
    res.json(prices.data.reverse())
};

exports.createSubscription = async (req, res) => {
    try {
        const user = await User.findById(req.user._id)

        const session = await stripe.checkout.sessions.create({
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
        console.log("checkout session", session);
        res.json(session.url)
    } catch (error) {
        console.log(error);

    }
}