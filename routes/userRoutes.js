const express = require("express");
const {
  registerUser,
  loginUser,
  currenUser,
} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", validateToken, currenUser);

module.exports = router;
