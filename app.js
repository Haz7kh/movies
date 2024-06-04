const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./utils/db");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api", require("./routes/movieRoutes"));
app.use("/api", require("./routes/reviewRoutes"));

module.exports = app;
