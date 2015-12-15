angular.module('bil-admin', ['ngMaterial']);

angular.module('bil-admin', ['ngMaterial']).controller('MainController', function(){
  var scope = this;
  this.save = function function_name() {
    scope.htmlPreview = quill.getHTML();
  }

  this.htmlPreview = "";
});
