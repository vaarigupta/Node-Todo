var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/Todos');
var {User} = require('./models/Users');
var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.json())

//------------------------------------------------------------------------------
//POST - Todos 
app.post('/todos',(req , res)=>{
     
     var body = req.body;
	var newTodo = new Todo({
		text : body.text,
		completed: body.completed,
		completedAt : body.completedAt
	})

	newTodo.save().then((doc)=>{
		res.status(200).send(doc);

	},(e)=>{

		
		res.status(400).send(e);

	})

})
//------------------------------------------------------------------------------
//POST - users
app.post('/users',(req,res)=>{
	var body = req.body;
var newUser = new User({
	email : body.email,
	password : body.password
})

newUser.save().then((doc)=>{
	res.status(200).send(doc);

},(e)=>{
	res.status(400).send(e);
})

})
//----------------------------------------------------------------------------------------
//GET - root

app.get('/',(req,res)=>{
	if(req)
	{
		res.status(200).send('<h1> Welcome to my Todo App -Thanks for visiting </h1>')
	}

})
//------------------------------------------------------------------------------
//GET - todos
app.get('/todos',(req , res)=>{
	
	Todo.find().then((todos)=>{
		res.status(200).send({todos})

	},(e)=>{
		res.status(400).send(e)
	})


})

//------------------------------------------------------------------------------
//GET - todos with specific object ID
app.get('/todos/:id',(req,res)=>{
	var id = req.params.id;

	if(ObjectID.isValid(id))
	{
		Todo.findById(id).then((todo)=>{
			if(!todo)
			{
				return res.status(404).send("Todo not found with the given Id");
			}
			res.status(200).send( `My todo :  ${todo}`);

		}, (e)=>{
			res.status(400).send("Invalid ID -Sorry");
		})
	}

	else
	{
		res.status(404).send("Invalid Id");
	}
	

})

//------------------------------------------------------------------------------
//GET - users
app.get('/users',(req , res)=>{
	
	User.find().then((users)=>{
		res.status(200).send({users})

	},(e)=>{
		res.status(400).send(e)
	})


})

//------------------------------------------------------------------------------
//GET - users with specific object ID
app.get('/users/:id',(req , res)=>{
	
var id = req.params.id;
if(ObjectID.isValid(id))
{
	User.findById(id).then((user)=>{
		if(!user)
			{
				return res.status(404).send("Sorry!!! No such user");
			}
			res.status(200).send(`User:  ${user}`);


	},(e)=>{
		res.status(400).send("Sorry no user found");

	})
}
else
{
	res.status(404).send("Invalid Id");
}
})



app.listen(port , ()=>{

	console.log(`Running of port ${port}`);
})












