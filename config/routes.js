  var customers = require('./../server/controllers/customers.js');
//step 4 continued from index we are exporting a function that is required by friends.js for the get customers route
  module.exports = function(app) {
    app.get('/customers', function(req, res) {
  		customers.show(req, res);
  		// console.log(res);
	})

	app.post('/add_customer',function(req,res){
		console.log('made it here');
		console.log("POST DATA",req.body);
			customers.add(req,res);
	})

	app.post('/delete_customer',function(req,res){
		console.log('made it here');
		console.log("POST DATA",req.body);
			customers.remove(req,res);
	})
};