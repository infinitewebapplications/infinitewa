(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'iwa-app',
      templateUrl: 'templates/home.html'
    })
    .Class({
      constructor: function() {

      }
    });
})(window.app || (window.app = {}));
