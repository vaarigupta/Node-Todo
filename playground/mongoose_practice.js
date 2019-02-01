const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');


mongoose.Promise = global.Promise;
 let Url = "mongodb://localhost:27017/TodoApp";
mongoose.connect(Url, {useNewUrlParser: true});

let Todo = mongoose.model('Todo',{
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

app.post('/todos',(req,res)=>{
  res.send(req.body)
})


app.listen(3000,()=>{
  console.log("Server running at port 3000");
})
