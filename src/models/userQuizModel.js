const mongoose = require('mongoose');


const userQuizSchema = new mongoose.Schema({
    userId: { type: Number,
        required: true
    },
    idQuiz: {type: Number,
        required: true
    },
    words: {type: Array,
        required: true},
    date: {type: Date, default: Date.now(),
        required: true},
    correctWords: {type: Array,
        required: true},
    score:{type: Number, default: 1000,
        required: true}
});

module.exports= mongoose.model('UserQuiz', userQuizSchema);