'use strict';

let express = require('express'),
    posts = ('./mock/posts.json');

let app = express();

 /**
  * Setting up the development server using the listen method
  * 
  * Create the get method on the app variable
  */
 // The slash parameter is sometimes called the location parameter
 app.get('/', function(req, res){
     res.send("<h1>I love Treehouse!</h1>");
 })

 app.get('/blog', function(req, res){
    res.send(posts);
 });
// Taking a callback function as a parameter
app.listen(3000, function(){
    console.log("FrontEnd server is running on port 3000");
});