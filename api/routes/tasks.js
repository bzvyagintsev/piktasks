var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Task = require("../models/task.js");

router.get("/", function(req, res, next) {
    Task.find(function(err, tasks) {
        if (err) return next(err);
        res.json(tasks);
    })
});

router.delete('/:id', function(req, res, next) {
    Task.findByIdAndRemove(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;