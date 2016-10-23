var User=require('../models/user');
var Reserva=require('../models/reserva');
var Horario=require('../models/horario');
var Salon=require('../models/salon');
var Prueba=require('../models/prueba');
var config =require('../../config');
var secretKey=config.secretKey;
var jsonwebtoken=require('jsonwebtoken');
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

	api.post('/',function(req,res){
		transporter.sendMail({
			from:'usatureserva@gmail.com',
			to:'rivera-miguel@hotmail.com',
			subject:req.body.subject+'Sent from'+req.body.email
		},function(err,info){
			if(err){
				res.send(err);
			}else{
				console.log(info.accepted);
				console.log(info.rejected);
			}
		});
	});
	
return api;
}