//step 5 we need to require mongoose
var mongoose =require('mongoose');
//step 6 define a Customer variable for our Friend model (that we are going to create)
var Customer = mongoose.model('Customer')
//step 7 create an immediate function and return the object

module.exports = (function(){
	return {
	 show: function(req,res){
		
		Customer.find({},function(err,results){
			if(err){
				console.log(err);

			}
			else {
				console.log(results);
				res.json(results);
				console.log("restuls",results);
			}
			//okay so here we have the results and we are
			//sending a response back to factory via
			//ajax
		})
	},

	add: function(req,res){
		var customer = new Customer(req.body);
		customer.save(function(err,results){
			if(err){
				console.log('something went wrong' + res);
			}
			else {
				console.log('successfully added customer');
				res.json("yo");
			}
		})


	},

	remove: function(req,res){
		Customer.remove({_id:req.body.id},function(err,results){
			if (err){
				console.log('this does not work' + err);
			}
			else{
				Customer.find({},function(err,results){
					res.json(results);
				})
			}
		})
	}
}
})();