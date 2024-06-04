const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("../utils/jwt");

exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).send("User already exists.");

    user = new User({ username, email, password });
    await user.save();
    const token = jwt(user);
    res.send({ token });
  } catch (err) {
    res.status(500).send("Server error");
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send("Invalid credentials");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send("Invalid credentials");

    const token = jwt(user);
    res.send({ token });
  } catch (err) {
    res.status(500).send("Server error");
  }
};
