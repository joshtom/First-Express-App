'use strict';

let express = require('express');

let app = express();

 /**
  * Setting up the development server using the listen method
  * 
  * Create the get method on the app variable
  */
 // The slash parameter is sometimes called the location parameter
 app.get('/', function(request, response){
     response.send("I love Treehouse!");
 })


app.listen(3000);