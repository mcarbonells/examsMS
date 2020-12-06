
const WeekQuiz = require('../models/weekQuizModel');
const weekQuizCrt ={};

weekQuizCrt.addWeekQuiz = async (req, res) =>{
    const{words, idQuiz}=req.body;
    let weekQuiz = new WeekQuiz({
        idQuiz: idQuiz,
        words: words,
        active: true,
    });
    await weekQuiz.save();
    return res.status(201).send(weekQuiz);
}

weekQuizCrt.findById= async (req, res)=> {
    const weekQuiz = await findW();
    if(weekQuiz.length !=null) return res.status(200).json(weekQuiz);
    return res.status(204).json({message: "NO QUIZ CREATED"});
}

weekQuizCrt.findAll = async (req, res)=>{
    const weekQuiz = await WeekQuiz.find();
    if(weekQuiz.length!== 0) return res.status(200).json(weekQuiz);
    return res.status(204).json({message: "NO QUIZ CREATED"});
};

weekQuizCrt.updateWQ = async (req, res)=>{
    let weekQuiz = await findW();
    if(weekQuiz.length === 0) return res.status(404).send({message: "NOT FOUND"});

    weekQuiz = weekQuiz[0];

    weekQuiz.active = false;

    await weekQuiz.save();
    return res.status(200).send(weekQuiz);
};

weekQuizCrt.deleteWeek =async (req, res)=> {
    let weekQuiz = await WeekQuiz.find({active: false});
    if(weekQuiz==null) return res.status(404).jsonp({message: "NOT FOUND"});
    weekQuiz= weekQuiz[0];
    await weekQuiz.remove();
    return res.status(200).send(weekQuiz);
};

findW= async () =>{
    const weekQuiz =  await WeekQuiz.find({active: true})
    if(weekQuiz.length!==0) return  weekQuiz;
    else return null;
}

module.exports= weekQuizCrt;