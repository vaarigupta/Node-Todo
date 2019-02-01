const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');


mongoose.Promise = global.Promise;
 let Url = "mongodb://localhost:27017/TodoApp";
mongoose.connect(Url, {useNewUrlParser: true});

/// Creating a collection named todo
let Todo = mongoose.model('todo',{
text :{
  required: true,
  type: String,
  minlength: 1,
  trim: true
},
completed:
{
  type: Boolean,
  default : false
},
completedAt:
{
  type: Number,
  default : null
}
});
/// Creating a collection named user
let User = mongoose.model('User',{
  name :
  {
    type:String,
    required:true,
    minlength: 1,
    trim: true
  },
  email:
  {
    type: String,
    required:true,
    minlength: 1,
    trim: true
  },
  password:
  {
    type: String,
    required:true,
    minlength: 1,
    default:123
  }
})

const app = express();
app.use(bodyParser.json());


/// Posting a TODO onto the server and getting response from the server- Creation
app.post('/todos',(req,res)=>{
  var todo = new Todo({
    text : req.body.text
  })

  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send("Sorry error occured");
  })
})


app.listen(3000,()=>{
  console.log("Server running at port 3000");
})
