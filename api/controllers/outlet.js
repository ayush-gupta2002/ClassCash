const Outlet = require("../models/outlet");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const create = async (req, res) => {
  const { username, owner, phone, password } = req.body;
  const foundOutlet = await Outlet.findOne({ username: username });
  if (foundOutlet) {
    res.status(500).json("Outlet already exists");
  }

  const outlet = new Outlet({ owner, phone, username });

  try {
    const newOutlet = await Outlet.register(outlet, password);
    res.status(201).json(newOutlet);
  } catch (e) {
    res.status(500).json(e);
  }
};

const login = async (req, res) => {
  let accessToken;
  console.log(req.body);
  accessToken = jwt.sign(
    { id: req.user.id, isOutlet: true },
    process.env.JWT_SEC,
    { expiresIn: "3d" }
  );
  let loggedInUser = { ...req.user, accessToken };
  console.log(loggedInUser);
  res.status(201).json(loggedInUser);
};

const logout = (req, res) => {
  req.logout(function (err) {
    if (err) {
      return res.status(400).json({ error: true });
    }
    return res.status(201).json({ success: true });
  });
};

module.exports = { create, login, logout };
