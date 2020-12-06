
const ExamLevel = require('../models/examLevelModel');
const examLevelCrt ={};

 examLevelCrt.addExamLevel = async (req, res)=> {
     const {userId, level, words, correctWords, pass} = req.body;
    let examLevel = new ExamLevel({
        userId: userId,
        level: level,
        words: words,
        correctWords: correctWords,
        pass: pass
    });
    await examLevel.save()
     return res.status(201).send(examLevel);
 }
 examLevelCrt.findById = async (req, res) => {
     const userId = req.params.userId;
     const examLevel = await ExamLevel.find({userId: userId});
     if(examLevel!=null) return res.status(200).send(examLevel);
     return res.status(204).json({message: "NO EXAMS CREATED"});
};

 examLevelCrt.findAll = async (req, res) =>{
    const examLevel = await ExamLevel.find();
    console.log(examLevel);
     if(examLevel.length!== 0) return res.status(200).json(examLevel);
     return res.status(204).json({message: "NO EXAMS CREATED"});
};

examLevelCrt.updateE = async (req, res) => {
    const {words,correctWords, pass, date} = req.body;
    let examLevel = await findE(req);
    examLevel = examLevel[0];
    if(examLevel==null) return res.status(404).jsonp({message: "NOT FOUND"});

    examLevel.date=date;
    examLevel.words= words;
    examLevel.correctWords = correctWords;
    examLevel.pass = pass;

    await examLevel.save();
    return res.status(201).send(examLevel);
};

 examLevelCrt.deleteExam = async (req, res) => {
     let examLevel = await findE(req);
     examLevel = examLevel[0];

     if(examLevel==null) return res.status(404).jsonp({message: "NOT FOUND"});

     await examLevel.remove();
     return res.status(200).send(examLevel);
};

 findE= async (req) =>{
     const{userId, level} = req.body
     const examLevel =  await ExamLevel.find({userId: userId, level: level})
     if(examLevel.length!==0) return  examLevel;
     else return null;
 }

module.exports= examLevelCrt;