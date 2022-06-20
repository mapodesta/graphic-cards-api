const express = require("express");
const router = express.Router();
const graphicRoutes = require("./graphicCards.js");

router.use(graphicRoutes);
module.exports = router;
