var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var Messages = require("./models/messages.js");
mongoose.Promise = Promise;

 var app = express();


var db = process.env.MONGODB_URI || "mongodb://localhost/portfolio";

mongoose.connect(db, function(error) {

 if (error) {
   console.log(error);
 }
 else {
   console.log("mongoose connection is successful");
 }
});


app.use(express.static("public"));

var PORT = process.env.PORT || 3001; 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.get("/api/messages", function(req, res) {

  Messages.find({})
    .exec(function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
});
app.post("/message", function(req, res) {
  var newMsg = new Messages(req.body);
  
  Messages.create(newMsg, function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });

});


app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
