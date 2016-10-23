angular.module('MyApp').controller('Main',function($scope,$http){

	$scope.postData={};

	$scope.postMail=function(contact){
		if($scope.contactForm.$invalid==true){
			return
		}
	$scope.postData=angular.copy(contact);

	$http.post('/',$scope.postData)
	.success()

    };

});