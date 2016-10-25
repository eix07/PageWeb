var config =require('../../config');
var nodemailer=require('nodemailer');

var transporter=nodemailer.createTransport({
	service:'gmail',
	auth:{
		user:'usatureserva@gmail.com',
		pass:'usatureserva123'
	}
});


module.exports=function(app,express){

	var api=express.Router();

	api.post('/send',function(req,res){
		console.log(req.body.email);
		console.log(req.body.subject);
		transporter.sendMail({
			from:'HelloWorldPag',
			to:'rivera-miguel@hotmail.com , santiagojersson@gmail.com',
			subject:'nueva actualizacion de La paggg!!!',
			text:'Email de: '+req.body.email+'\n'+'Texto'+'\n'+req.body.subject
		},function(err,info){
			if(err){
				res.send(err);
			}else{
				console.log(info.rejected);
				console.log(info.pending);
				console.log("sent!!"+info.response);
			}
		});
	});
	
return api;
}