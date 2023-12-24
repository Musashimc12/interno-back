const express = require("express");
const InternoController = require("../controllers/interno.controller");

const router = express.Router({ mergeParams: true });

router.route("/").get(InternoController.getInterno);

module.exports = router;

