var {mongoose} = require("./../server/db/mongoose.js");
var {Todo} = require("./../server/models/Todos.js");
var {User} = require("./../server/models/Users.js");
var {ObjectID} = require('mongodb');

//todos
var Tid =  "5bcc8372777c5e193e22d543";
//user
var Uid =  "5bcb6c61fa44ba166904c255"; 

if(!ObjectID.isValid(Tid && Uid))
{
	console.log("ID is not valid")
}
else
{
	console.log("ID is valid")
}

//-----------------------------------------------------------
Todo.find({_id : Tid}).then((todos)=>{
	if(!todos)
 	{
 		return console.log("There is no such todo with the given ID")
 	}
 	
	console.log("Todos using find()" , todos);
},e=>console.log("Unable to find"))



Todo.findOne({_id : Tid}).then((todos)=>{
	if(!todos)
 	{
 		return console.log("There is no such todo with the given ID")
 	}


	console.log("Todos using findOne()" , todos);
},e=>console.log("Unable to find"))


 
 Todo.findById({_id : Tid}).then((todos)=>{

 	if(!todos)
 	{
 		return console.log("There is no such todo with the given ID")
 	}

	console.log("Todos using findById()" , todos);

},e=>console.log("Unable to find"))

///------------------------------------------------------------

 User.find({_id : Uid }).then((User)=>{
 	if(!User)
 	{
 		return console.log("User not found at this ID")
 	}
 	 
	console.log(" User Using find()" , User);
}).catch(()=>{
	console.log("Invalid ID , Please Enter the correct ID")
})



User.findOne({_id : Uid}).then((User)=>{
	if(!User)
 	{
 		return console.log("User not found at this ID")
 	}
 	
	console.log("User Using findOne()" , User);
}).catch(()=>{
	console.log("Invalid ID , Please Enter the correct ID")
})




 User.findById({_id : Uid}).then((User)=>{
 	if(!User)
 	{
 		return console.log("User not found at this ID")
 	}

	console.log("User Using findById()" , User);
}).catch(()=>{
	console.log("Invalid ID , Please Enter the correct ID")
})
