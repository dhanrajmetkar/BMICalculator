const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// use bodyParser middleware for parsing application/xwww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
    res});

app.get("/bmicalculator",function(req,res)
{
res.sendFile(__dirname+"/bmiCalculator.html");

});

app.post("/bmicalculator",function(req,res)
{
console.log(req.body);

var height=Number(req.body.h);
var weight=Number(req.body.w);


res.send("The result of height is :"+(height*weight));


});


app.post("/", function (req, res) {

    console.log(req.body);
    // console.log(req.body.num2);

    // // console.log(req.body.num2);
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    res.send("the result of the calculation is :" + (num1 + num2));

});

app.post


app.listen(3000, function () {
    console.log("server started successfully");
});