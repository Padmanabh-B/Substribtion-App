const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 64,
    },
    stripe_customer_id: String,
    subscription: [],

});

module.exports = mongoose.model('User', userSchema);
