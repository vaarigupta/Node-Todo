const {MongoClient , ObjectID} = require('mongodb');



// the following code is valid for mongodb version less than 3.0 


MongoClient.connect('mongodb://localhost:27017/TodoApp1',function (err, db) {
  if (err) 
  {
  	return console.log('Unable to connect');
  }
  console.log("Connected to server");


  db.collection('Todo').insertOne({
   	text : "Nothing to do",
   	completed : true
   },(err , result)=>{
		if(err)
		{
			return console.log("Unable to insert Data");
		}
		console.log(JSON.stringify(result.ops,undefined , 2));


	})

  db.close();

}); 

