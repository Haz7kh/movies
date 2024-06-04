const jwt = require("jsonwebtoken");

module.exports = (user) => {
  const payload = {
    _id: user._id,
    role: user.role,
  };
  return jwt.sign(payload, "your_jwt_secret_key", { expiresIn: "1h" });
};
