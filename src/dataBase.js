const mongoose = require('mongoose');

mongoose.connect('mongodb://mongoe.mongoe.172.31.65.76.xip.io/examsDB',{
    userNewUrlParser: true,
    userCreateIndex: true
});
const connection= mongoose.connection;

connection.once('open',() => {
    console.log("DB is connected");
});

module.exports = mongoose;


