const express = require("express")

exports.register = async (req, res) => {
    try {
        //validation
        const {name, password} = req.body;
        if(!name){
            return res.json({
                error:'Name is required'
            })
        }
        if(!password || password.length<6){
            return res.json({
                error:"Password is required and must me more than 6"
            })
        }
        res.json({
            data:"this is register endpoint"
        })


    } catch (error) {
        console.log(error);
    }
}
