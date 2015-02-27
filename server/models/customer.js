//step 8 oops we need a model with a schema, let's create that now

//require mongoose

var mongoose=require('mongoose');

//make the schema

var CustomerSchema = new mongoose.Schema({
	customer_name: String,
	created_date: String
});

// now we use the schema to create the model
//OMG THE LINE BELOW MAKES THE COLLECTION IN THE DB AND 
//MAKES IT PLUARL .... Friend = friends.

mongoose.model('Customer',CustomerSchema);
