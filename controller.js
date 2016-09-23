angular.module('userProfiles').controller('MainController', function($scope, mainService){

      $scope.users = mainService.getData();

      $scope.toggleFavorite = mainService.toggleFavorite;

})
