const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Product name must be included."]
	},
	price: {
		type: Number,
		required: [true, "Product price must be included."]
	},
	featured: {
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model("Product", productSchema);