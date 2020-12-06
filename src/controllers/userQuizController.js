const UserQuiz= require('../models/userQuizModel');
const userQuizCrt ={};

userQuizCrt.addUserQuiz = async (req, res) =>{
    const {userId,idQuiz, words, correctWords, score} = req.body;
    let userQuiz = new UserQuiz({
        userId: userId,
        idQuiz: idQuiz,
        words: words,
        correctWords: correctWords,
        score: score
    });
    await userQuiz.save();
    return res.status(200).jsonp(userQuiz);

}

userQuizCrt.findByUserId= async (req, res) => {
    const userId = req.params.userId;
    const userQuiz = await UserQuiz.find({userId: userId});
    if(userQuiz.length > 0) return res.status(200).json(userQuiz);
    return res.status(204).json({message: "NO QUIZZES CREATED"});
}

userQuizCrt.findByIDQuiz= async (req, res) =>{
    const idQuiz = req.params.idQuiz;
    const userQuiz = await UserQuiz.find({idQuiz: idQuiz});
    if(userQuiz.length > 0) return res.status(200).json(userQuiz);
    return res.status(204).json({message: "NO QUIZZES CREATED"});
}

userQuizCrt.findAll = async (req, res) =>{
    const userQuiz = await UserQuiz.find();
    if(userQuiz.length > 0) return res.status(200).json(userQuiz);
    return res.status(204).json({message: "NO QUIZZES CREATED"});
};

userQuizCrt.deleteQuiz =async (req, res) =>{
    let userQuiz = await findUQ(req);
    userQuiz= userQuiz[0];

    if(userQuiz==null) return res.status(404).jsonp({message: "NOT FOUND"});

    await userQuiz.remove();
    return res.status(200).send(userQuiz);
};

findUQ = async (req) =>{
    const{userId, IdQuiz} = req.body
    const userQuiz =  await UserQuiz.find({userId: userId, IdQuiz: IdQuiz})
    if(userQuiz.length!==0) return  userQuiz;
    else return null;
}


module.exports= userQuizCrt;