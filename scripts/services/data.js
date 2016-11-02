'use strict';

angular.module('iwa')
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

});
