$(function(){
	var app = angular.module("tarefas", []); 
	app.controller("MeuControle", function($scope) {
    $scope.check = ["Milk", "Bread", "Cheese"];
    $scope.addItem = function () {
        $scope.check.push($scope.addMe);
    }

    $scope.removeItem = function(x){
    	$scope.check.splice(x, 1)
    }
});

	$('#buttonE').click(function(){
		$('#inputE').val('')
	});
});