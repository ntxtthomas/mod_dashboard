var mongoose = require('mongoose');
var animal = mongoose.model('animal');
module.exports = function(app){
	app.get('/', function(req,res){
	res.render('index');
})
	app.post('/life', function(req,res){
	console.log("LIFE DATA: ", req.body);
	
	var newAnimal = new animal({
		name: req.body.name,
		country: req.body.country,
		group: req.body.group
	})

	newAnimal.save(function(err,newAnimal){
		if(err){
			console.log("ERROR!");
		}
		else {
			console.log("SUCCESS, ANIMAL ADDED!");
			res.redirect('/results'); 
		}
	});
}) 

app.get('/results', function(req,res){
	animal.find({}, function(err, allAnimals){
		if(err){
			console.log(err);
		}
		else{
			res.render('results', {animals: allAnimals});
		}
	})
})

app.get('/update/:id', function(req,res){
	animal.findOne({_id:req.params.id}, function(err, oneAnimal){
		if(err){
			console.log(err);
		}
		else{
			res.render('update', {oneAnimal: oneAnimal});
		}
	})
})

app.post('/animal/:id', function(req,res){
	animal.update({_id: req.params.id}, {name: req.body.name, country: req.body.country, group: req.body.group}, function(err, oneAnimal){
		res.redirect('/results');
	})
})
app.get('/animals/destroy/:id', function(req,res){
	animal.remove({_id: req.params.id}, function (err, oneAnimal){
    res.redirect('/results');
	})
})
}