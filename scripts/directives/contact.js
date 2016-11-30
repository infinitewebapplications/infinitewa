'use strict';

app.directive('contact', function() {

  return {
    replace : true, // inject the html, get rid of custom tags
    templateUrl : 'templates/contact.html' // set template html
  };

});
