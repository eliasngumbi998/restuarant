var app = angular.module('app', []);
app.controller('myController', function($scope, $http){
	$scope.fetch = function(){
    	$http.get("fetch.php").success(function(data){ 
    	    $scope.restaurant = data; 
	    });
    }
 
    $scope.salad = function(){
    	//console.log($scope.menu);
    	$http.post("menu.php", $scope.salad)
    	.success(function(){ 
            $scope.salad = 'santa Fe';
            $scope.salad = 'Greek';
            $scope.salad = 'Asian';
            $scope.salad = 'Dressing';
            $scope.salad = 'Bread';
	        $scope.fetch();
        });
        $scope.entree = function(){
            //console.log($scope.menu);
            $http.post("menu.php", $scope.entree)
            .success(function(){ 
                $scope.salad = 'steak';
                $scope.salad = 'Salmon';
                $scope.salad = 'Rice';
                $scope.fetch();
            });
            $scope.soup = function(){
                //console.log($scope.menu);
                $http.post("menu.php", $scope.soup)
                .success(function(){ 
                    $scope.salad = 'minestrone';
                    $scope.salad = 'Hot and sour';
                    $scope.salad = 'Miso';
                    $scope.salad = 'bread';
                    $scope.fetch();
                });
    }
};
