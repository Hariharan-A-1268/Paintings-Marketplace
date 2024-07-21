const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Hariharan_A:PASSWORD@cluster0.awnduiy.mongodb.net/AnimalsDB');

const productsSchema = new mongoose.Schema({
	id: Number,
	name: String,
	price: Number,
	image_url: String
});

const cartsSchema = new mongoose.Schema({
	id: Number,
	name: String,
	price: Number,
	image_url: String
});

const product = mongoose.model("Product", productsSchema);

const cart = mongoose.model("Cart", cartsSchema);

module.exports =  {product, cart};
