const express = require("express");

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