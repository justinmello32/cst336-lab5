const express = require("express");
const app = express();
app.set("view engine", "ejs");
const fetch = require("node-fetch");

//Routing
app.get("/", async funtion(req, res){
	let apiUrl = `https://api.unsplash.com/photos/random/?client_id=mXmDF87g_R0kGl7TH_rwOrLsnuIAVDBZTX0OHInloFs&featured=true&orientation=landscape`;
	let response = await fetch(apiUrl);
	let data = await response.json();

	res.render("index", {"imageUrl": data.urls.small});
});

//Starting Server
app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Express server is running");
});