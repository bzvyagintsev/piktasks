var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var taskSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true }
});

var Task = mongoose.model('Task', taskSchema);

module.exports = Task;