 var express = require("express"); 
 var app = express(); 
 app.use("/", express.static("public"));
 app.listen(80, ()=> {console.log("Server is running. To exit press crtl + C")});
