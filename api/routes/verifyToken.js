const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  console.log(req.headers);
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) {
        return res.status(403).json("Token is not valid");
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    return res.status(401).json("You are not authenticated");
  }
};

const verifyTokenAndTeacher = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isTeacher) {
      next();
    } else {
      res.status(403).json("You are not a teacher");
    }
  });
};

const verifyTokenAndAuth = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id == req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not authorized to do that");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not an admin");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuth,
  verifyTokenAndTeacher,
};
