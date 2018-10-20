const mongoose = require('mongoose');

 /// used to build a connection to the database server 
mongoose.Promise = global.Promise;
const URL = "mongodb://localhost:27017/TodoApp_Mongoose";
mongoose.connect(URL , {useNewUrlParser : true });


module.exports = {
	mongoose
}