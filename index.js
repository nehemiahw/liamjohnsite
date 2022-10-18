import express from 'express';


const PORT = 1337 || process.env.PORT;

const app = express();

app.use(express.static('public/assets/'));


app.get("/", function(req, res){
    res.sendFile("index.html", {root: './public'});
});

app.listen(PORT, function(){
    console.log(`listening on: ${PORT}`);
});