const { Router } = require ("express");
const { prices, createSubscription }= require("../controllers/subs");
const { requireSignin }= require ("../middlewares/index");
const router = Router();




router.get('/prices', prices)
router.post("/create-subscription", requireSignin, createSubscription)

module.exports = router;