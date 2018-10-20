var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/Todos');
var {User} = require('./models/Users');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();


app.get('/',(req,res)=>{
	if(req)
	{
		res.send('<h1> Welcome to my Todo App -Thanks for visiting </h1>')
	}

})
app.get('/todos',(req , res)=>{
	if(req)
	{
		res.send("<h2>Done</h2>")
	}


})

app.listen(3000 , ()=>{
	console.log("Running on port 3000");
})












