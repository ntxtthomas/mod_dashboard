var mongoose = require('mongoose');
var Animal = mongoose.model('Animal');
module.exports = {
  show: function(req, res){
    Animal.find({}, function(err,quotes){
      res.render('results', {animal: animal});
    })
  },
  create: function(req, res){
    var animal = new animal({name: req.body.name, country: req.body.country, group: req.body.group});
    animal.save(function(err){
      if(err){
        console.log("something went wrong");
      } else {
        res.redirect('/results');
      }
    })
  } 
}