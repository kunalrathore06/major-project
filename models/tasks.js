const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    }
}) 

const Todotask = mongoose.model('Todotask',taskSchema)