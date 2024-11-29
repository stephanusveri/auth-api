// routes/authRoutes.js
const express = require("express");
const { register, login, helloWorld } = require("../controllers/authController");
const router = express.Router();

// POST request untuk register
router.post("/register", register);

// POST request untuk login
router.post("/login", login);

// GET request untuk test endpoint
router.get("/test", helloWorld);

module.exports = router;
