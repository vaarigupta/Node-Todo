const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser : true},(err , client)=>{
  if(err)
  {
    return console.log("sorry stuck with an error");
  }
  console.log("Connected with Mongo DB server");
  const db = client.db('TodoApp');

  db.collection('Todos').insertOne({
    text : "Learning new tech",
    done : true
  },(err , result)=>{
    if(err)
    {
      return console.log("Unable to add data");
    }
    console.log(JSON.stringify(result.ops));
  })


  db.collection('Users').insertOne({
    name: 'Vaari',
    age: 21,
    course : "Btech - IT"
  },(err,result)=>{
    if(err)
    {
      return console.log("caught with an error");
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));

  })

  client.close();
})
