const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });
mongoClient.connect(function(err, client){
 
    if(err){
        return console.log(err);
    }
    
    client.close();
});

const app = express();

app.all("/search", function(request, response){
    response.send("[1, 2, 3]");
});

app.all("/addData", function(request, response){
    response.send("asd");
})

app.use("/public", express.static(__dirname + "/public"));

app.listen(3000);
console.log("прослушка начата");