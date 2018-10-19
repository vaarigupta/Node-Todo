const {MongoClient , ObjectID } = require('mongodb');

var URL = 'mongodb://localhost:27017';
MongoClient.connect(URL , {useNewUrlParser : true} , (err , Client)=>{
	if(err)
	{
		return console.log("Unable to connect with database");

	}
	console.log("Connected to server");
	var db = Client.db('TodoApp');
    ///-----------------------------------------------------------------
	///for deleting multiple documents 
	db.collection('Users').deleteMany({ name : 'Vaari'}).then((result)=>{
		console.log(result);
	})
	///---------------------------------------------------------------
	/// for deleting single document
	 db.collection('Users').deleteOne({name : 'Raavi'}).then((result)=>{
	 	console.log(result)
	 })
	 ///---------------------------------------------------------------------
	 /// finding the particular one and deleting that one  
	 db.collection('Todo').findOneAndDelete({ _id : new ObjectID("5bc39b902b460817fd639f3c")}).then((result)=>{
	 	console.log(result);
	 })

    // db.collection('Todo').deleteMany({text : "Nothing to do"}).then((result)=>{
    // 	console.log(result);
    // 	    })

    // db.collection('Todo').deleteOne({ name : "Raavi"}).then((result)=>{
    // 	console.log(result);
    // })
})