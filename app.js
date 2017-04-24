var module = angular.module("myApp", []);
module.controller("MainController", Main);
function Main($scope){
	$scope.hourOfDay = 10;
	console.log("Main function called before the div view");
}

module.controller("RandomController", Random);
function Random(){
	console.log("Random function called")
}

module.controller("TimeController", TimeDisplay);
function TimeDisplay($scope){
	$scope.userName = "";
	$scope.currentDate = new Date();
	$scope.timeString = $scope.currentDate.toTimeString();
	$scope.updateTime = function(){
		$scope.currentDate = new Date();
		$scope.timeString = $scope.currentDate.toTimeString();
	}
}