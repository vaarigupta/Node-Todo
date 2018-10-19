const {MongoClient , ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017';
MongoClient.connect(url ,{useNewUrlParser : true},(err , Client)=>{

	if(err)
	{
		return console.log("Unable to connect with server");
	}
	console.log('Successfully Connected to server');
	var db = Client.db('TodoApp');

	//--------------------------------------------------------------------
	//USE OF TOARRAY()  METHOD
	// db.collection('Users').find().toArray().then((res)=>{
	// 	console.log(JSON.stringify(res,undefined , 2))

	// }).catch((err)=>{
	// 	console.log("Unable to fetch from the server")
	// });
//-----------------------------------------------------------------------------
//USE OF COUNT() METHOD
// db.collection('Users').find().count().then((count)=>{
// 		console.log(`Count : ${count}`)

// 	}).catch((err)=>{
// 		console.log("Unable to fetch from the server")
// 	});
//--------------------------------------------------------------------------

// db.collection('Users').find({
// 	name : 'Anamika'
// }).toArray().then((res)=>{
// 		console.log(JSON.stringify(res,undefined , 2))

// 	}).catch((err)=>{
// 		console.log("Unable to fetch from the server")
// 	});

//----------------------------------------------------------------------
//IMPLEMENTATION OF OBJECTID AND FETCHING OF DATA USING OBJECTID
// db.collection('Users').find({
// 	_id : new ObjectID('5bc370f5713c9820ab6b57c7')
// }).toArray().then((res)=>{

// 	console.log(JSON.stringify(res,undefined,2));

// }).catch((err)=>{
// 	console.log("Unable to fetch from the server");

// })


db.collection('Users').find(
	{
		name : 'Vaari'
	}).count().then((count)=>{
		console.log(`Count : ${count}`)

	}).catch((err)=>{
		console.log("Unable to fetch from the server")
	});



	Client.close();

}) 
