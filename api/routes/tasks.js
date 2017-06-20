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

router.get('/:id', function(req, res, next) {
    Task.findById(req.params.id, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


router.post('/', function(req, res, next) {
    Task.create(req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.put('/:id', function(req, res, next) {
    Task.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.delete('/:id', function(req, res, next) {
    Task.findByIdAndRemove(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});



module.exports = router;