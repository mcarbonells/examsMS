const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mafe:mafe123@examsdb.hwjtj.mongodb.net/examsDB?retryWrites=true&w=majority',{
    userNewUrlParser: true,
    userCreateIndex: true
});
const connection= mongoose.connection;

connection.once('open',() => {
    console.log("DB is connected");
});

module.exports = mongoose;


