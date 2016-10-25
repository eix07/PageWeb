angular.module('myapp',[]).controller('mainController',function($scope,$http){
	$scope.send=function(mail){
		$http.post('/api/send',{subject:mail.subject,email:mail.email})
		}
});