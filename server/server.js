var express = require('express');
var bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');
const path = require('path');
var _ = require('lodash');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/Todos');
var {User} = require('./models/Users');

var {ObjectID} = require('mongodb');
var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static( path.join(__dirname ,'/..','/public')));
app.use(bodyParser.json())
app.engine('.hbs',expressHbs({defaultLayout:'layout' , extname :'.hbs'}));
app.set('view engine','.hbs');



//----------------------------------------------------------------------------------------
//GET - root

app.get('/',(req,res)=>{
	if(req)
	{
		res.render('index');
	}

})
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
		res.status(200).send({doc});

	},(e)=>{
		res.status(400).send("Sorry , Todo Not Added");
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






//------------------------------------------------------------------------------
//GET - todos
app.get('/todos',(req , res)=>{

	Todo.find().then((todos)=>{
		res.status(200).send({todos})

	},(e)=>{
		res.status(400).send("Todo Not Found");
	})


})



//------------------------------------------------------------------------------
//GET - todos with specific object ID
app.get('/todos/:id',(req,res)=>{
	var id = req.params.id;
///  validation of Id by ObjectID.isValid()
	if(!ObjectID.isValid(id))
	{
    return res.status(404).send("Invalid Id");

	}

  ///if Its is Valid then Using findById() method to find in database
  Todo.findById(id).then((todo)=>{
    var ans = todo ? res.status(200).send({todo}) : res.status(404).send({});
    return ans;

  }, (e)=>{
    res.status(400).send("Could not Request");
  })

})

///Deleting a TODO:

app.delete('/todos/:id',(req,res)=>{
  var id = req.params.id;
  if(!ObjectID.isValid(id))
  {
    return res.status(400).send("Not a Valid Id");
  }

  Todo.findByIdAndRemove(id).then((todo)=>{
    var ans = todo ? res.status(200).send(`Todo Deleted : \n ${todo}`) : res.status(404).send("Not Found any Todo");
    return ans;
  },(e)=>{
    return res.status(400).send("Ooops, Some error");
  })
})

////-- Making Updates by the user
app.patch('/todos/:id',(req,res)=>
{
  var id = req.params.id;
  // The body from the request that we want to updates
  var body = _.pick(req.body, ['text' , 'completed']);
  if(!ObjectID.isValid(id))
  {
    return res.status(404).send("Invalid ID");
  }


  if(_.isBoolean(body.completed) && body.completed)
  {
    // var date = new Date().getDate();
    // var month = new Date().getMonth();
    // var year = new Date().getFullYear();
    // body.completedAt = `${date}/${month}/${year}` ;
    body.completedAt = new Date().getTime();
  }
  else {

    body.completedAt = null;
    body.completed = false;
  }
  Todo.findByIdAndUpdate(id , { $set:body} , {new : true}).then((todo)=>{
    var ans = todo ? res.send(todo) : res.status(400).send("Not Updated");
    return ans;
  }).catch((e)=>{
    return res.status(400).send("Oops Some Error");
  })


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
//  validation of Id by ObjectID.isValid()
if(!ObjectID.isValid(id))
{
  return res.status.send("Id is Invalid")

}

///if Its is Valid then Using findById() method to find in database
User.findById(id).then((user)=>{
  var ans = user ? res.status(200).send({user}) : res.status(404).send("Not found User");
  return ans;


},(e)=>{
  res.status(400).send("Sorry No user found");

})

})



app.listen(PORT , ()=>{

	console.log(`Running on port : ${PORT}`);
})
