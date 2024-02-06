//main imports
const express = require("express");
const app = express();
require('dotenv').config();

//module imports
const connectToDB = require("./backend/db/mongoose");

//routes
const productRoutes = require("./backend/routes/products.routes");

app.get("/", (req, res) => {
	res.send("store api");
});

app.use("/api/v1/products", productRoutes);

//initialization
const PORT = 5001;
const CXN = process.env.MONGOOSE_CONNECTION;

app.use(express.json());
const start = async () => {
	try {
		await connectToDB(CXN);

		app.listen(PORT, () => {
			console.log("Listening on port", PORT);
		});
	} catch (err) {
		console.error(err);
	}
}

start();