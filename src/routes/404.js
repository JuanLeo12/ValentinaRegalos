const express = require("express");
const router = express.Router();

const Error404Controller = require("../controllers/404Controller");

router.get("/404", Error404Controller.list);

module.exports = router;
