const express = require("express");
const authRoutes = require("./routes/authRoutes");
const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

module.exports = app;


// cara test postman dan endpoint API
// http://localhost:5000/api/auth/register
// http://localhost:5000/api/auth/login
