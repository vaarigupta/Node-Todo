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

app.get('/todos/:id',(req,res)=>{
	var id = req.params.id;

	if(ObjectID.isValid(id))
	{
		Todo.findById(id).then((todo)=>{
			if(!todo)
			{
				return res.send(404 ,"Todo not found with the given Id");
			}
			res.send(200 , `My todo :  ${todo}`);

		}, (e)=>{
			res.send(400 ,"Invalid ID -Sorry");
		})
	}

	else
	{
		res.send(404 ,"Invalid Id");
	}
	

})



app.listen(port , ()=>{

	console.log(`Running of port ${port}`);
})












