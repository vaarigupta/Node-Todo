const mongoose = require('mongoose');

 /// used to build a connection to the database server 
mongoose.Promise = global.Promise;
const URL = "mongodb://localhost:27017/TodoApp_Mongoose";
mongoose.connect(URL , {useNewUrlParser : true });

//mongoose.model is used to create a blueprint of the document like class which gives the bluepeint of the object
//Here we define the fields whicha we are going to have and define some of its characteristics
var Todo = mongoose.model('Todo',{
	text:{
      type: String
	},
	completed : {
      type : Boolean
	},
	completedAt:
	{
      type : Number
	}
})

// here we are creating instance - creating a document in a Todo collection 
// var newTodo = new Todo({
// 	text: "Raavi is a idiot girl"
// });

var myTodo = new Todo({
	text : "Vaari is a cute girl",
	completed : true,
	completedAt : 12
})

// saving the document which returns a promise bcz we have not passed a callback function in it
// so we attach callback functions  -success and failure ,using then() method
// newTodo.save().then((doc)=>{
// 	console.log("Saved Todo " , doc)

// },(err)=>{
// 	console.log("Unable to save Todo")

// })

myTodo.save().then((res)=>{
	console.log("Result : " , JSON.stringify(res,undefined,2))

}, (err)=>{
	 console.log("Unable to save Todo")
	
})

















