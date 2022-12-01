const express = require("express")
const { prices } = require ("../controllers/subs")
const router = express.Router();

router.get('/prices', prices)

module.exports = router;