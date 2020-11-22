const express = require("express");
const app = express();
app.set("view engine", "ejs");

//Routing
app.get("/", funtion(req, res){
	res.render("index");
});

//Starting Server
app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Express server is running");
});