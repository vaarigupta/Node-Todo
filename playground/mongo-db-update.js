const {MongoClient , ObjectID} = require('mongodb');

var URL = "mongodb://localhost:27017"
MongoClient.connect(URL , {useNewUrlParser : true},(err,Client)=>{
	if(err)
	{
		return console.log("Unable to Connect with the server");
	}
	console.log("Connected with server");
	const db = Client.db('TodoApp');

	// db.collection('Users').findOneAndUpdate(
	// {
	// 	_id : new ObjectID("5bc39b902b460817fd639f3d")
	// }, 
	// { 
		
	// 	$set :
	// 	 {
	// 	    "name" : "Samina",
	// 	    "email" : "sami@gmail.com"
	// 	 }
		 
 //     } ,
 //     {
	// 	returnOriginal : false
	// },
	
	// (err ,res)=>
	
	// {
	// 	if(err)
	// 	{
	// 		return console.log("Sorry Not updated")
	// 	}
	// 	console.log(res)
	// }
	// )

	// db.collection('Users').findOneAndUpdate(
	// {
	// 	_id : new ObjectID("5bc39b902b460817fd639f3d")
	// }, 
	// { 
		

	// 	$inc:
	// 	 {
	// 	 	age : 1,
		 	

	// 	 }
 //     } ,
 //     {
	// 	returnOriginal : false
	// },
	
	// (err ,res)=>
	
	// {
	// 	if(err)
	// 	{
	// 		return console.log("Sorry Not updated")
	// 	}
	// 	console.log(res)
	// }
	// )

	db.collection('Todo').findOneAndUpdate({
		_id: new ObjectID("5bc9e2d2e6115a45e06f7d22")
	},{
		$set:
		{
			text : "Learn ,develop and  Implement Web Development",
			completed : true,
			time : "30/10/18"
		}
	},{
		returnOriginal:false
	}).then((res)=>{
		console.log(res);

	}).catch((errorMsg)=>{
     	console.log(errorMsg);
		
		})

})

