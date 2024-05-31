const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Connect to MongoDB

// Middleware
app.use(bodyParser.json());

// Routes
// app.use("/api/auth", require("./routes/authRoutes"));
// app.use("/api", require("./routes/movieRoutes"));
// app.use("/api", require("./routes/reviewRoutes"));

module.exports = app;
