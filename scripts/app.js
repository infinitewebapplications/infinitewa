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

})
.controller('contactCtrl', function($scope) {

  $scope.ngChanged = function() {
    console.log('this input changed..');
  };

});
