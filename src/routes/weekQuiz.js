const express = require('express');
const router= express.Router();

const {findAll, addWeekQuiz, deleteWeek, findById, updateWQ} = require ('../controllers/weekQuizController');

router.get('/Quizes', (req, res) => findAll(req, res))
    .post('/newQuiz', (req, res) => addWeekQuiz(req, res))
    .get('/thisWeekQuiz', (req, res) => findById(req, res))
    .put('/deactivateQuiz', (req, res) => updateWQ(req, res))
    .delete('/deleteQuiz', (req, res) => deleteWeek(req, res));



module.exports = router;