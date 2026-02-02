import express from "express";

const router = express.Router();

let loginValidation = (req, res, next) => {
  const token = req.query.token;

  if (token == "admin123") {
    next();
  } else {
    res.send("access denied");
  }
};

router.get("/login",loginValidation,(req, res) => {
  res.send("login successful");
});

router.get("/signup", (req, res) => {
  res.send("sign up here");
});

export default router;
