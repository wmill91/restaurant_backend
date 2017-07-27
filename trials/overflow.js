

app.get('/get-all-restaurants', function(request, response){
  
  app.get('/get-rest-loops', function(request, response) {


 console.log(AllRestaurants);
 response.send(AllRestaurants);




app.post ('/get-userData', function (request, response) {

 userData = request.body;

 for(i=0; i<AllRestaurants.length; i++){

 if(AllRestaurants[i].price == userData.price){
    
   response.send(AllRestaurants[i])
   console.log(AllRestaurants[i])

 }

}
}
);





  console.log(userData);
  response.send(userData);

  };

  response.send(AllRestaurants);
;
  AllRestaurants.push(request.body);
  response.send(AllRestaurants[i].name);



console.log(AllRestaurants);


 var match = AllRestaurants.filter(function(AllRestaurants){
  return AllRestaurants.hunger == 1;
  response.send(match);
});



app.post ('/get-userData', function(request, response) {
 console.log("route getting hit");
 console.log(request.body);
  


});

restaurant.save(function(err, restaurants){
   console.log(restaurant);
   if (err)
       res.send(err);
   else
       res.send("Restaurant added!");

 

restaruants.get(function (req, res){

}

var userInput = [i],{

post(function); (err, todos){

 res.json(200, todos);
app.post('___', function (req, res){

 var restaurant = new Restaurant();

 restaurant={
 "name": "Juan's Flying Burrito",
 "hunger": 1,
 "price": 1,
 "alcohol": true,
 "carryout": true,
 "fancy": 1,
 "ID": 1,

 };
 restaurant.POST('')(function(err){
   console.log(restaurant)
   if (err)
       res.send(err);
       res.json(message("Restaurant added!"))

 });

