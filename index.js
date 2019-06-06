const express = require ("express");
const app = express();
app.get("/", function (req, res){
    //logic
    res.send("hello world");
});
app.listen(600, function (){
    console.log("App listening on port 600");
});