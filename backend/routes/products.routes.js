const express = require("express");
const router = express.Router();

const { getAllProducts } = require("../controllers/products.controller");

router.route("/").get(getAllProducts);

module.exports = router;