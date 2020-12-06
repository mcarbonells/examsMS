const express = require('express');
const router= express.Router();

const {findAll, addUserQuiz, findByIDQuiz,findByUserId, deleteQuiz}= require ('../controllers/userQuizController');


router.get('/usersQuizes/:idQuiz', (req, res) => findByIDQuiz(req, res))
    .get('/quizOfUser/:userId', (req, res) => findByUserId(req, res))
    .post('/newQuiz', (req, res) => addUserQuiz(req, res))
    .get('/userQuizes', (req, res) => findAll(req, res))
    .delete('/deleteUserQuiz', (req, res) => deleteQuiz(req, res));



module.exports = router;