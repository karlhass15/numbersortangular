var myApp = angular.module("myApp", []);

myApp.controller('NumberController', ["$scope", '$http', '$filter', function($scope, $http, $filter){
    $scope.info = {};

//array??
    var orderBy = $filter('orderBy');
    $scope.info = {};
    $scope.zetaArray = [];

        //GET
        $scope.getPeople = function(){
            $http.get('/people').then(function(response){
                //?????.data
                $scope.zetaArray = response.data;
            });


        };
    $scope.order = function(predicate, reverse) {
        $scope.zetaArray = orderBy($scope.zetaArray, predicate, reverse);
    };

        $scope.getPeople();

    }]);



