const mongoose1 = require('mongoose');
const mongoose2 = require('mongoose');

mongoose1.connect('mongodb://3.238.233.96:27018/examsDB',{
    userNewUrlParser: true,
    userCreateIndex: true
});
const connection= mongoose1.connection;

connection.once('open',() => {
    console.log("DB 1 is connected");
});

mongoose2.connect('mongodb://3.239.124.145:27018/examsDB',{
    userNewUrlParser: true,
    userCreateIndex: true
});
const connection2= mongoose2.connection;

connection2.once('open',() => {
    console.log("DB 2 is connected");
});

module.exports ={mongoose1, mongoose2};


