var mongoose = require('mongoose');
var animalSchema = new mongoose.Schema({
	name: String,
	country: String,
	group: String
})
var animal = mongoose.model('animal', animalSchema);