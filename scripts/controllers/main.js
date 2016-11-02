'use strict';

angular.module('iwa')
.controller('mainCtrl', function($scope, dataService) {
  $scope.helloworld = function() {
    console.log('hello there');
  };

  $scope.helloConsole = dataService.helloConsole;

  $scope.lists = [
    {
      name : 'Marshall'
    },
    {
      name : 'Andre'
    }
  ];

  $scope.addToList = function() {
    var newListItem = { name : 'Whoa!' };
    $scope.lists.unshift(newListItem);
  };

  $scope.saveData = function(toSave) {
    dataService.saveData(toSave);
  };

  $scope.deleteData = function(toDelete, index) {
    dataService.deleteData(toDelete);
    // removes the selected list item
    $scope.lists.splice(index, 1);
    // new lists array (updated)
    console.log($scope.lists);
  };

  dataService.getData(function(response){
    console.log(response);
    $scope.lists = response.data;
  });
});
