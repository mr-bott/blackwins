const router = require("express").Router();

const { getSignup,getLogin } = require("../controllers/auth.controllers");

router.post("/signup", getSignup);
router.post("/login",getLogin);

module.exports = router;
