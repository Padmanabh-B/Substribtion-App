const express = require("express");
const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth")
const jwt = require("jsonwebtoken")


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

        const exist = await User.findOne({ email })
        if (exist) {
            return res.json({
                error: "Email is Taken"
            })
        }

        //hash password
        const hashedPassword = await hashPassword(password);

        try {
            const user = await new User({
                name, email, password: hashedPassword
            }).save();
            //create signed token 
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" })


            const { password, ...rest } = user._doc;
            return res.json({ token,user: rest })

        } catch (error) {
            console.log(error);
        }
    } catch (error) {
        console.log(error);
    }
}


export const login = async (req, res) => {
    try {
        //check for the email
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.json({
                error: "No user Found"
            })
        }
        //check for the password
        const match = await comparePassword(req.body.password, user.password)
        if (!match) {
            return res.json({
                error: "Wrong Password",
            })
        }
        //create signed token 
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" })

        const { password, ...rest } = user._doc;
        res.json({
            token,
            user: rest,
        })



    } catch (error) {
        console.log(error)
    }
}