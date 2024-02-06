const mongoose = require('mongoose');

const connectToDB = (connectionString) => {
	const connection = mongoose.connect(connectionString);

	if(connection) {
		console.log("Successfully connected to Database");
	} else {
		throw new Error("Database Connection Unsuccessful")
	}

	return connection;
};

module.exports = connectToDB;