const mongoose = require('mongoose');

const ExamLevel = new mongoose.Schema({
    userId: {type: Number,
        required: true},
    level: {type: String,
        required: true},
    words: {type: Array,
        required: true},
    date: {type: Date, default: Date.now(),
        required: true},
    correctWords: {type: Array,
        required: true},
    pass:{type: Boolean,
        required: true}
});

module.exports= mongoose.model('ExamLevel', ExamLevel);
