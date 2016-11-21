'use strict';

angular.module('iwa')
.directive('list', function() {

  return {
    // controller : 'mainCtrl', // set controller specifically.. get rid of ng-controller
    replace : true, // inject the html, get rid of custom tags
    templateUrl : 'templates/list.html' // set template html
  };

});
