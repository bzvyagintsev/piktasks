var express = require("express");
var bodyParser = require("body-parser");
var http = require("http");
var path = require("path");

var app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "dist")));

var tasks = require("./api/routes/tasks.js");
app.use("/api/tasks", tasks);
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});

// Database
var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pikDB");
mongoose.connection
    .on('error', console.error.bind(console, 'connection error:'))
    .once('open', function() {
        console.log("DB conected");
    });

// Server
var port = process.env.PORT || 3000;
app.set('port', port);

var server = http.createServer(app);

server.listen(port, function() {
    console.log("App running on port " + port);
});