const express = require("express");
const router = express.Router();

const { getAllProducts, createProduct, getProductbyID } = require("../controllers/products.controller");

router.route("/").get(getAllProducts);
router.route('/').post(createProduct);
router.route('/:_id').get(getProductbyID);

module.exports = router;