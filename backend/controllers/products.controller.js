const Product = require("../models/product.model");

const getAllProducts = async (req, res) => {
	try {
		const { price, featured } = req.query; 
		const queryObject = {};

		if(featured !== undefined) {
			queryObject.featured = featured == 'true' ? true : false 
		}

		let allProducts = Product.find(queryObject);

		if(price !== undefined) {
			let sortBy = 1;
			if(price == 'desc') {
				sortBy = -1;
			};
			allProducts = allProducts.sort({ price: sortBy });
		}

		const result = await allProducts;
		res.status(200).json(result);
	} catch (err) {
		console.error("Failure with getAllProducts: ", err);
		res.status(400).send("Couldn't resolve your request.")
	}
};

module.exports = {
	getAllProducts
}