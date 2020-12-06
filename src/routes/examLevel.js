const express = require('express');
const router= express.Router();

const  {findAll, addExamLevel, deleteExam, findById, updateE}= require ('../controllers/examLevelController');

router.get('/AllExams', (req, res) => findAll(req,res))
    .post('/newExamLevel', (req, res) => addExamLevel(req, res))
    .get('/userExamLevel/:userId', (req, res) => findById(req, res))
    .put('/completeExamLevel', (req, res) => updateE(req, res))
    .delete('/deleteExamLevel', (req, res) => deleteExam(req, res));

module.exports = router;