(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    // production enable
    // ng.core.enableProdMode();
    ng.platformBrowserDynamic
      .platformBrowserDynamic()
      .bootstrapModule(app.AppModule);
  });
})(window.app || (window.app = {}));
