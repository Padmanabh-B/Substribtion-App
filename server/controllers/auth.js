const express = require("express");
const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth")

exports.register = async (req, res) => {
    try {
        //validation
        const { name, email, password } = req.body;
        if (!name) {
            return res.json({
                error: 'Name is required'
            })
        }
        if (!password || password.length < 6) {
            return res.json({
                error: "Password is required and must me more than 6"
            })
        }

        
        //hash password
        const hashedPassword = await hashPassword(password);

        try {
            const user = await new User({
                name, email, password: hashedPassword
            }).save();
            console.log(user);

            const { password, ...rest } = user._doc;
            return res.json()

        } catch (error) {
            console.log(error);
        }




        res.json({
            data: "this is register endpoint"
        })


    } catch (error) {
        console.log(error);
    }
}
