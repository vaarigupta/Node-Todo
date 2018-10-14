//const MongoClient = require('mongodb').MongoClient;
//object destructing

// var object = { name : 'vaari' , age : 21};
// var {name , age} = object;
// console.log(name);
// console.log(age);

const {MongoClient , ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);


// the following code is valid for mongodb version greater than 3.0

MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true }, function (err, client) {
  if (err) 
  {
  	return console.log('Unable to connect');
  }
  console.log("Connected to server");

  var db = client.db('TodoApp');

 //  db.collection('Todo').insertOne({
 //  	_id : '123',
 //   	text : "Nothing to do",
 //   	completed : true
 //   },(err , result)=>{
	// 	if(err)
	// 	{
	// 		return console.log("Unable to insert Data");
	// 	}
	// 	//console.log(JSON.stringify(result.ops,undefined , 2));

 //     console.log(result.ops[0]._id)
	// })

  // db.collection('Users').insertOne({
  // 	name : 'Vaari',
  // 	age : 21,
  // 	email : 'vaarigupta24@gmail.com',
  // 	ContactNo : 9212920610,
  // 	hobbies : [
  // 	'dancing' , 'listening songs' , 'reading']

  // },(err , result)=>{
  // 	if(err)
  // 	{
  // 		return console.log('Unable to add user')
  // 	}
  // 	//console.log(JSON.stringify(result.ops , undefined,2))
  // 	console.log(result.ops[0]._id.getTimestamp())
  	

  // })

  client.close();

}); 

// the following code is valid for mongodb version less than 3.0 


// MongoClient.connect('mongodb://localhost:27017/TodoApp1',{ useNewUrlParser: true }, function (err, db) {
//   if (err) 
//   {
//   	return console.log('Unable to connect');
//   }
//   console.log("Connected to server");


//   db.collection('Todo').insertOne({
//    	text : "Nothing to do",
//    	completed : true
//    },(err , result)=>{
// 		if(err)
// 		{
// 			return console.log("Unable to insert Data");
// 		}
// 		console.log(JSON.stringify(result.ops,undefined , 2));


// 	})

//   db.close();

// }); 

