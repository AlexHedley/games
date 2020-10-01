var myApp = angular.module('myApp', []);
myApp.controller('myController', function ($scope, $http) {   

    $scope.games = [];

    $scope.init = function () {
        getData();
    }

    getData = () =>  {
        var file = 'data/games.json';

        $http.get(file)
        .then(function(response) {
            $scope.games = response.data.games;
        });
    };

    $scope.OpenGame = (game) => {
        window.open(game.url);
    }
    $scope.OpenCode = (game) => {
        window.open(game.code);
    }
});