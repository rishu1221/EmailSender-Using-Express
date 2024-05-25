const express = require("express")

const signup = require("../controller/signup")
const getBill = require("../controller/getBill")

const router = express.Router()

router.route("/user/signup").post(signup);
router.route("/product/getBill").post(getBill)

module.exports = router