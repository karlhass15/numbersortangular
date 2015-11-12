var myApp = angular.module("myApp", ['ngMaterial', 'ngAnimate', 'ngAria']);

myApp.controller('NumberController', ["$scope", '$http', '$filter', function($scope, $http, $filter){
    $scope.info = {};

//array??
    var orderBy = $filter('orderBy');
    $scope.info = {};
    $scope.zetaArray = [];

        //GET
        $scope.getPeople = function(){
            $http.get('/people').then(function(response){
                $scope.zetaArray = response.data;
            });


        };
    $scope.order = function(predicate, reverse) {
        $scope.zetaArray = orderBy($scope.zetaArray, predicate, reverse);
    };

        $scope.getPeople();

    $scope.info.message = "Click here for fun";
    $scope.changeMessage = function() {
        $scope.info.message = "Just kidding you're in bootcamp Hell";

    };



    }]);

