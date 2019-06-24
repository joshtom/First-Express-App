'use strict';

let express = require('express'),
      posts = require('./mock/post.json');

let app = express();

 /**
  * Setting up the development server using the listen method
  * 
  * Create the get method on the app variable
  * 
  * Adding a parameter to the route
  */
 // The slash parameter is sometimes called the location parameter
 app.get('/', function(req, res){
     res.send("<h1>I love Myself and I, I hope this will work now!</h1>");
 })

 app.get('/blog/:title', function(req, res){
     debugger;
     let title = req.params.title;
     let post = posts[title];
    res.send(post);
 });
// Taking a callback function as a parameter
app.listen(5000, function(){
    console.log("FrontEnd server is running on port 3000");
});