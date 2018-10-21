var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/Todos');
var {User} = require('./models/Users');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();



app.use(bodyParser.json())

//------------------------------------------------------------------------------
//POST - route
app.post('/todos',(req , res)=>{
     
     var body = req.body;
	var newTodo = new Todo({
		text : body.text,
		completed: body.completed,
		completedAt : body.completedAt
	})

	newTodo.save().then((doc)=>{
		res.send(doc);

	},(e)=>{

		
		res.status(400).send(e);

	})

})

app.post('/users',(req,res)=>{

var newUser = new User({
	email : req.body.email
})

newUser.save().then((doc)=>{
	res.send(doc);

},(e)=>{
	res.status(400).send(e);
})

})
//----------------------------------------------------------------------------------------
//GET - Route

// app.get('/',(req,res)=>{
// 	if(req)
// 	{
// 		res.send('<h1> Welcome to my Todo App -Thanks for visiting </h1>')
// 	}

// })
app.get('/todos',(req , res)=>{
	
	Todo.find().then((todos)=>{
		res.send({todos})

	},(e)=>{
		res.status(400).send(e)
	})


})



app.listen(3000 , ()=>{
	console.log("Running on port 3000");
})












