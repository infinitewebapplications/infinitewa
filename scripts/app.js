angular.module('iwa', [])
.controller('mainCtrl', function($scope) {
  $scope.helloworld = function() {
    console.log('hello there');
  };

  $scope.lists = [
    {
      name : 'Marshall'
    },
    {
      name : 'Andre'
    }
  ];
})
.controller('contactCtrl', function($scope) {
  $scope.ngChanged = function() {
    console.log('this input changed..');
  };
});
