var mongoose = require("mongoose");
var autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;

var connection = mongoose.createConnection(process.env.MONGODB_URI || "mongodb://localhost/pikDB");

autoIncrement.initialize(connection);

var taskSchema = new Schema({
    id: Number,
    name: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true }
});

taskSchema.plugin(autoIncrement.plugin, {
    model: 'Task',
    field: 'id',
    startAt: 1001
});

var Task = mongoose.model('Task', taskSchema);

module.exports = Task;