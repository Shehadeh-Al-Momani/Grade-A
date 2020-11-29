const jwt = require("jsonwebtoken");

//checking if login or not
const authentication = async (req, res, next) => {
  const token = req.headers('x-auth')
  if (!token) {
   return res.status(401).json("Please login first");
  }
  try {
    await jwt.verify(token, process.env.SECRET);
    next();
  } catch (err) {
    throw err;
  }
};
