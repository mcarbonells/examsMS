const mongoose = require('mongoose');

mongoose.connect('mongodb://3.239.124.145:27018/examsDB',{
    userNewUrlParser: true,
    userCreateIndex: true
});
const connection= mongoose.connection;

connection.once('open',() => {
    console.log("DB is connected");
});

module.exports = mongoose;
