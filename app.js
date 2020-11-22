const express = require("express");
const app = express();

//Routing
app.get("/", funtion(req, res){
	res.send("it works!");
});

//Starting Server
app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Express server is running");
});