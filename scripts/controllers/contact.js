angular.module('iwa')
.controller('contactCtrl', function($scope) {

  $scope.ngChanged = function() {
    console.log('this input changed..');
  };

});
