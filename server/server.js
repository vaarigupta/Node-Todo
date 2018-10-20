var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/Todos');
var {User} = require('./models/Users');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();


// app.get('/',(req,res)=>{
// 	if(req)
// 	{
// 		res.send('<h1> Welcome to my Todo App -Thanks for visiting </h1>')
// 	}

// })
// app.get('/todos',(req , res)=>{
// 	if(req)
// 	{
// 		res.send("<h2>Done</h2>")
// 	}


// })
app.use(bodyParser.json())
app.post('/todos',(req , res)=>{

	var newTodo = new Todo({
		text : req.body.text
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
	res.status(400).send(e)
})

})



app.listen(3000 , ()=>{
	console.log("Running on port 3000");
})












