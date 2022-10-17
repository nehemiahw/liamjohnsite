import express from 'express';
import path from 'path';
import {readFileSync} from 'node:fs';


const PORT = 1337 || process.env.PORT;

const app = express();


app.get("/", function(req, res){
    res.sendFile("index.html", {root: './public'});
});

app.listen(PORT, function(){
    console.log(`listening on: ${PORT}`);
});