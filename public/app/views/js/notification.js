$("#submit").click(function(){
	$("#subject").val('');
	$("#email").val('');
	$.toaster({ priority : 'success', title : ':D', message : 'Tu mensaje fue enviado'});
});