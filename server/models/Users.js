const mongoose = require('mongoose');


var User = mongoose.model('Users',{
	email : {
		type : String,
		minlength : 1,
		required: true,
		trim : true
	},
	password: 
	{
		type: String,
		default: 123,
		required : true 
	}
})

module.exports  = 
{
	User
}
