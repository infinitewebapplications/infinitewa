'use strict';

app.directive('works', function() {

  return {
    // controller : 'mainCtrl', // set controller specifically.. get rid of ng-controller
    replace : true, // inject the html, get rid of custom tags
    templateUrl : 'templates/works.html' // set template html
  };

});
