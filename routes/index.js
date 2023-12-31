const express = require("express");

const internoRouter = require("./interno");
const userRouter = require("./user");
const authRouter = require("./auth");

const router = express.Router();

router.use("/interno", internoRouter);
router.use("/user", userRouter);
router.use("/auth", authRouter);

module.exports = router;
