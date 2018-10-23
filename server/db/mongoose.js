const mongoose = require('mongoose');

 /// used to build a connection to the database server 
mongoose.Promise = global.Promise;
const URL = "mongodb://localhost:27017/TodoApp_Mongoose";
mongoose.connect("mongodb://<vaarigupta>:<vaari6029>@ds243798.mlab.com:43798/nodeapp"  || URL , {useNewUrlParser : true });


module.exports = {
	mongoose
}