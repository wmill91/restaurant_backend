const express = require('express')   //naming variables basically
const app = express();  
const port = 3000 
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.listen(process.env.PORT || 5000, function(err) {  //heroku knows
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`Magic is happening on ${port}`)
});


mongoose.connect('mongodb://heroku_6qdw68f6:nuij4ge41c5f1h35t1r2vtbq6v@ds153412.mlab.com:53412/heroku_6qdw68f6');
    
    if (error) console.log(error);
    else console.log ('mongo connected');


    RSchema = new mongoose.Schema({
   
     name: String,
     hunger: Number,
     price: Number,
     alcohol: Boolean,
     Carryout: Boolean,
     fancy: Number,
     ID: Number,
  
  },  { collection: "restaurants"}

);


var restaurants = mongoose.model('restaurants', RSchema);
  

  app.post('restaurants', function (req, res){
    console.log ("/restaurant end point getting hit");

      var restaurant = new Restaurant(req.body);

        rest
  });



// app.get('/restautants'), function(req,res){
//   restaurants.find(function(err,restaurants){
//     if(err){
//       console.log(err);
//     }else{
//       console.log(restaurants)
//     }
  
// };

//   var restaurants = mongoose.model('restaurants', Schema);
//   var userInput = restaurant;
//   var restaurant = userInput;
//       mongoose.connect('mongodb://heroku_6qdw68f6:nuij4ge41c5f1h35t1r2vtbq6v@ds153412.mlab.com:53412/heroku_6qdw68f6', function(error){




// });


// app.use(express.static('public'));
