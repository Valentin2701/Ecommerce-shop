import express from "express";
import * as authService from "../services/authService.js";
import { isAuth } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", async (req, res, next) => {
  const userData = req.body;
  try {
    if (userData.password !== userData.rePass)
      throw new Error("Паролите не съвпадат!");

    const result = await authService.register({
      username: userData.username,
      email: userData.email,
      password: userData.password,
    });

    res.cookie("auth", result.token);
    res.json({user: user, message: "Registered successfully!"});
  } catch (err) {
    return next(err);
  }
});

router.post("/login", async (req, res, next) => {
  const userData = req.body;
  try {
    const result = await authService.login(userData);

    res.cookie("auth", result.token);
    res.json({user: user, message: "Logged in succesfully"});
  } catch (err) {
    return next(err);
  }
});

router.post("/logout", isAuth, (req, res) => {
  res.clearCookie("auth");
  res.end();
});

export { router };