const jwt = require("jsonwebtoken");
const jwtSecret = "secret";

module.exports = function (req, res, next) {
  //get token from the headers.js
  const token = req.header("x-auth-token");
  //check if tokrn exists
  if (!token) {
    return res.json({ msg: "no token, acces denied!.." });
  }
  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      res.json({ msg: "Token not valid" });
    }
    req.personel = decoded.personel;
    next();
  });
};
