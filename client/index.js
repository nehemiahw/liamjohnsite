const express = require("express");
const path = require("path");


const PORT = process.env.port || 8080;
const app = express();

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/public/assets')));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.get("/gallery", function(req, res){
    res.sendFile(path.join(__dirname, "/views/gallery.html"));
});

app.listen(PORT, function(){
    console.log(`listening on: ${PORT}`);
});