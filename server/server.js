const mongoose = require('mongoose');

//-------------------------------------------------------------------------------
 /// used to build a connection to the database server 
mongoose.Promise = global.Promise;
const URL = "mongodb://localhost:27017/TodoApp_Mongoose";
mongoose.connect(URL , {useNewUrlParser : true });



///-------------------------------------------------------------------------------------
//mongoose.model is used to create a blueprint of the document like class which gives the bluepeint of the object
//Here we define the fields whicha we are going to have and define some of its characteristics
var Todo = mongoose.model('Todo',{
	text:{
      type: String, 
      required : true,
      minlength : 1,
      trim : true
	},
	completed : {
      type : Boolean,
      default : false
	},
	completedAt:
	{
      type : Number,
      default : null
	}
})

///----------------------------------------------------------------------------------------------------
// here we are creating instance - creating a document in a Todo collection 
var myTodo = new Todo({
	text : "Web Development practice",
	completed : true,
	completedAt : 12
})



///--------------------------------------------------------------------------------------------------
// saving the document which returns a promise bcz we have not passed a callback function in it
// so we attach callback functions  -success and failure ,using then() method


myTodo.save().then((res)=>{
	console.log("Result : " , JSON.stringify(res,undefined,2))

}, (err)=>{
	 console.log("Unable to save Todo" , err)
	
})

//--------------------------------------------------------------------------------------------------------

var User = mongoose.model('Users',{
	email : {
		type : String,
		minlength : 1,
		required: true,
		trim : true
	},
	password: 
	{
		type: String,
		default: 123,
		required : true 
	}
})


var newUser = new User({
	email : "vaari@gmail.com"
})

newUser.save().then((Result)=>{
	console.log(Result);
},(err)=>{
	console.log("Unable to add new user" , err)
})

//----------------------------------------------------------------------------------------------------













