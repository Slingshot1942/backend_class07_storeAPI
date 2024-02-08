require('dotenv').config();
const CXN = process.env.connection_string;
const connectToDB = require('./db/mongoose');
const Product = require('./models/product.model')

const TEST_PRODUCTS = [
	{
	    name: 'Table',
		price: 55,
		featured: false,
  	},
  	{ 
	  	name: 'Jacket', 
	  	price: 20, 
	  	featured: true 
	},
	{ 
	  	name: 'Lamp', 
		price: 10, 
		featured: true 
	}
];

const seedDB = async () => {
	try {
		console.log("Seeding the database")
		await connectToDB(CXN);
		await Product.deleteMany();
		await Product.create(TEST_PRODUCTS);
		console.log("Seeding Successful!");
		process.exit(0);
	} catch (err) {
		console.error("There was an error seeding the database: ", err);
		process.exit(1);
	}
};

seedDB();