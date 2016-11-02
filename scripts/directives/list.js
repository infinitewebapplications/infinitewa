'use strict';

angular.module('iwa')
.directive('list', function() {

  return {
    controller : 'mainCtrl',
    templateUrl : 'templates/list.html'
  };

});
