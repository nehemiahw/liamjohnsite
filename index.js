const express = require("express");
const path = require("path");


const PORT = process.env.port || 8080;
const app = express();

app.use(express.static('public'))

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/client/views/index.html"));
});

app.listen(PORT, function(){
    console.log(`listening on: ${PORT}`);
});