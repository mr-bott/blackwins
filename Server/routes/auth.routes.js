const router = require("express").Router();

const { getSignup, getLogin } = require("../controllers/auth.controller");

router.post("/signup", getSignup);
router.post("/login", getLogin);

module.exports = router;
