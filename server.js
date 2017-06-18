var express = require("express");
var bodyParser = require("body-parser");
var http = require("http");
var path = require("path");

var app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "dist")));

var task = require("./api/routes/task.js");
app.use("/task", task);

// Database
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/pikDB");
mongoose.connection
    .on('error', console.error.bind(console, 'connection error:'))
    .once('open', function() {
        console.log("DB conected");
    });

// Server
var port = process.envPORT || 3000;
app.set('port', port);

var server = http.createServer(app);

server.listen(port, function() {
    console.log("App running on port " + port);
});