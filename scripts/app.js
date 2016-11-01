angular.module('iwa', [])
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
})
.service('dataService', function($http){

  this.helloConsole = function() {
    console.log('hello console from service!');
  };

  this.getData = function(callback) {
    $http.get('mock/data.json').then(callback);
  };

  this.saveData = function(toSave) {
    console.log('to save :: ' + toSave);
  };

  this.deleteData = function(toDelete) {
    console.log('to delete :: ' + toDelete);
  };

})
.controller('contactCtrl', function($scope) {

  $scope.ngChanged = function() {
    console.log('this input changed..');
  };

});
