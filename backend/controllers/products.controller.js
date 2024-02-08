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

const getProductbyID = async (req, res) => {
	try {
		const ProductID = req.params.id;
		const product = await Product.findOne({ id: ProductID});

		res.status(200).json({ success: true, data: product });
	} catch(e) {
		console.error("Product not found.")
		res.status(404).json({ success: false, data: "Product not found." });
	}
};

const createProduct = async (req, res) => {
	try {
		const newProduct = await Product.create(req.body);
		res.status(201).json({ success: true, data: newProduct });
	} catch (e) {
		console.error(e.message);
		res.status(400).json({ success: false, data: e.message });
	}
};


module.exports = {
	getAllProducts,
	createProduct,
	getProductbyID
}