const mongoose = require('mongoose');

const weekQuizSchema = new mongoose.Schema({
    idQuiz: {type: Number,
        unique: true,
        required: true
    },
    words: {type: Array,
        required: true,
    },
    date: {type: Date, default: Date.now(),
        required: true
    },
    active:{type: Boolean,
        required: true
    }
});

module.exports= mongoose.model('WeekQuiz', weekQuizSchema);