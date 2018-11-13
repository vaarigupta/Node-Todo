const mongoose = require('mongoose');

 /// used to build a connection to the database server 
mongoose.Promise = global.Promise;
const URL ="mongodb://admin:admin123.mlab.com:43798/nodeapp";
mongoose.connect( URL , {useNewUrlParser : true });


module.exports = {
	mongoose
}

//"mongodb://localhost:27017/TodoApp_Mongoose"