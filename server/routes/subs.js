const express = require("express")
const { prices, createSubscription } = require ("../controllers/subs")
import {requiredSignin} from "../middlewares"
const router = express.Router();




router.get('/prices', prices)
router.post("/create-subscription", requiredSignin, createSubscription)

module.exports = router;